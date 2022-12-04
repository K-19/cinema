package by.bsuir.drankovich.cinema.model.repository;

import by.bsuir.drankovich.cinema.model.entity.Film;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FilmRepository extends CrudRepository<Film, Long> {
}
