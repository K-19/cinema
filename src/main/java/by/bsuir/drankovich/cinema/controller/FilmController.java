package by.bsuir.drankovich.cinema.controller;

import by.bsuir.drankovich.cinema.model.entity.Film;
import by.bsuir.drankovich.cinema.model.repository.FilmRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/films")
public class FilmController {

    @Autowired
    private FilmRepository filmRepository;

    @GetMapping
    public ResponseEntity<Iterable<Film>> films() {
        return ResponseEntity.ok(filmRepository.findAll());
    }

    @PostMapping
    public ResponseEntity<Iterable<Film>> createFilm(@RequestBody Film film) {
        filmRepository.save(film);
        return films();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Iterable<Film>> delete(@PathVariable Long id) {
        if (filmRepository.existsById(id))
            filmRepository.deleteById(id);
        return films();
    }
}
