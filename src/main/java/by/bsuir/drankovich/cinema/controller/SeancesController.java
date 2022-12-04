package by.bsuir.drankovich.cinema.controller;

import by.bsuir.drankovich.cinema.model.entity.Cinema;
import by.bsuir.drankovich.cinema.model.entity.Film;
import by.bsuir.drankovich.cinema.model.entity.Seance;
import by.bsuir.drankovich.cinema.model.repository.CinemaRepository;
import by.bsuir.drankovich.cinema.model.repository.FilmRepository;
import by.bsuir.drankovich.cinema.model.repository.SeanceRepository;
import by.bsuir.drankovich.cinema.model.request.SeanceRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/seances")
public class SeancesController {

    @Autowired
    private SeanceRepository seanceRepository;

    @Autowired
    private CinemaRepository cinemaRepository;

    @Autowired
    private FilmRepository filmRepository;

    @GetMapping
    public ResponseEntity<Iterable<Seance>> seances() {
        return ResponseEntity.ok(seanceRepository.findAll());
    }

    @GetMapping("/{cinemaId}/{filmId}")
    public ResponseEntity<Iterable<Seance>> getByCinemaAndFilms(@PathVariable("cinemaId") Long cinemaId, @PathVariable("filmId") Long filmId) {
        List<Seance> seances = seanceRepository.findByCinemaIdAndFilmId(cinemaId, filmId);
        return ResponseEntity.ok(seances);
    }

    @PostMapping
    public ResponseEntity<Iterable<Seance>> createSeance(@RequestBody SeanceRequest request) {
        if(cinemaRepository.existsById(request.getCinema()) && filmRepository.existsById(request.getFilm())) {
            Cinema cinema = cinemaRepository.findById(request.getCinema()).get();
            Film film = filmRepository.findById(request.getFilm()).get();
            Seance seance = Seance.builder()
                    .cinema(cinema)
                    .film(film)
                    .dateTime(request.getDateTime().plusHours(3))
                    .remainingTickets(cinema.getCountTickets())
                    .build();
            seanceRepository.save(seance);
        }
        return seances();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Iterable<Seance>> delete(@PathVariable Long id) {
        if (seanceRepository.existsById(id))
            seanceRepository.deleteById(id);
        return seances();
    }

}
