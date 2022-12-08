package by.bsuir.drankovich.cinema.controller;

import by.bsuir.drankovich.cinema.model.entity.Cinema;
import by.bsuir.drankovich.cinema.model.repository.CinemaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
public class CinemaController {

    @Autowired
    private CinemaRepository cinemaRepository;

    @GetMapping("/cinemas")
    public ResponseEntity<Iterable<Cinema>> cinemas() {
        System.out.println(LocalDateTime.now() + " GET Cinemas");
        return ResponseEntity.ok(cinemaRepository.findAll());
    }

    @PostMapping("/cinemas")
    public ResponseEntity<Iterable<Cinema>> createCinema(@RequestBody Cinema cinema) {
        if (cinema == null ||
                cinema.getName() == null ||
                cinema.getName().isEmpty() ||
                cinema.getCountTickets() == null ||
                cinema.getCountTickets() <= 0)
            return ResponseEntity.badRequest().build();
            cinemaRepository.save(cinema);
        return cinemas();
    }

    @DeleteMapping("/cinemas/{id}")
    public ResponseEntity<Iterable<Cinema>> deleteCinema(@PathVariable Long id) {
        if (cinemaRepository.existsById(id))
            cinemaRepository.deleteById(id);
        return cinemas();
    }
}
