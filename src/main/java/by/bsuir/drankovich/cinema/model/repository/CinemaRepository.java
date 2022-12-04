package by.bsuir.drankovich.cinema.model.repository;

import by.bsuir.drankovich.cinema.model.entity.Cinema;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CinemaRepository extends CrudRepository<Cinema, Long> {
}
