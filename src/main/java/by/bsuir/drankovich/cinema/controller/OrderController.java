package by.bsuir.drankovich.cinema.controller;

import by.bsuir.drankovich.cinema.model.entity.Cinema;
import by.bsuir.drankovich.cinema.model.entity.Order;
import by.bsuir.drankovich.cinema.model.entity.Seance;
import by.bsuir.drankovich.cinema.model.entity.User;
import by.bsuir.drankovich.cinema.model.repository.CinemaRepository;
import by.bsuir.drankovich.cinema.model.repository.OrderRepository;
import by.bsuir.drankovich.cinema.model.repository.SeanceRepository;
import by.bsuir.drankovich.cinema.model.repository.UserRepository;
import by.bsuir.drankovich.cinema.model.request.OrderRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@RestController
public class OrderController {

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private SeanceRepository seanceRepository;

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/users/{user}/orders")
    public ResponseEntity<Iterable<Order>> findOrdersByUserId(@PathVariable Long user) {
        List<Order> orders = orderRepository.findByUserId(user).stream().filter((order -> order.getSeance() != null && order.getSeance().getDateTime().isAfter(LocalDateTime.now()))).toList();
        return ResponseEntity.ok(orders);
    }

    @GetMapping("/users/{user}/orders/archive")
    public ResponseEntity<Iterable<Order>> findArchiveOrdersByUserId(@PathVariable Long user) {
        List<Order> orders = orderRepository.findByUserId(user).stream().filter((order -> order.getSeance() != null && order.getSeance().getDateTime().isBefore(LocalDateTime.now()))).toList();
        return ResponseEntity.ok(orders);
    }

    @PostMapping("/orders")
    public ResponseEntity<Iterable<Order>> createOrder(@RequestBody OrderRequest request) {
        if (request == null ||
                request.getUser() == null ||
                request.getUser() <= 0 ||
                request.getSeance() == null ||
                request.getSeance() <= 0 ||
                request.getTickets() == null ||
                request.getTickets() <= 0)
            return ResponseEntity.badRequest().build();
        if (seanceRepository.existsById(request.getSeance()) && userRepository.existsById(request.getUser())) {
            Seance seance = seanceRepository.findById(request.getSeance()).get();
            if (seance.getRemainingTickets() < request.getTickets())
                return ResponseEntity.badRequest().build();
            User user = userRepository.findById(request.getUser()).get();
            Order order = Order.builder()
                    .seance(seance)
                    .user(user)
                    .ticketsCount(request.getTickets())
                    .build();
            orderRepository.save(order);
            seance.setRemainingTickets(seance.getRemainingTickets() - order.getTicketsCount());
            seanceRepository.save(seance);
        }
        return findOrdersByUserId(request.getUser());
    }

    @DeleteMapping("/orders/{order}/{user}")
    public ResponseEntity<Iterable<Order>> deleteById(@PathVariable Long order, @PathVariable Long user) {
        if (orderRepository.existsById(order)) {
            Order deletingOrder = orderRepository.findById(order).get();
            Seance seance = deletingOrder.getSeance();
            seance.setRemainingTickets(seance.getRemainingTickets() + deletingOrder.getTicketsCount());
            seanceRepository.save(seance);
            orderRepository.deleteById(order);
        }
        return findOrdersByUserId(user);
    }
}
