package by.bsuir.drankovich.cinema.model.repository;

import by.bsuir.drankovich.cinema.model.entity.Seance;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SeanceRepository extends CrudRepository<Seance, Long> {
    List<Seance> findByCinemaIdAndFilmId(Long cinemaId, Long filmId);
}
