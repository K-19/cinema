package by.bsuir.drankovich.cinema.model.repository;

import by.bsuir.drankovich.cinema.model.entity.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends CrudRepository<User, Long> {
    boolean existsByEmail(String email);
    boolean existsByEmailAndPassword(String email, String password);

    User findByEmail(String email);
}
