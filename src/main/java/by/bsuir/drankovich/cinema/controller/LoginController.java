package by.bsuir.drankovich.cinema.controller;

import by.bsuir.drankovich.cinema.model.converter.UserConverter;
import by.bsuir.drankovich.cinema.model.entity.User;
import by.bsuir.drankovich.cinema.model.repository.UserRepository;
import by.bsuir.drankovich.cinema.requests.RequestLogin;
import by.bsuir.drankovich.cinema.requests.RequestRegistration;
import org.apache.commons.codec.digest.DigestUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;

@RestController
@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600)
public class LoginController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserConverter userConverter;

    @PostMapping("/login")
    public ResponseEntity<User> login(@RequestBody RequestLogin requestLogin) {
        if (requestLogin == null ||
                requestLogin.getEmail() == null ||
                requestLogin.getEmail().isEmpty() ||
                requestLogin.getPassword() == null ||
                requestLogin.getPassword().isEmpty())
            return ResponseEntity.badRequest().build();
        if (!userRepository.existsByEmailAndPassword(requestLogin.getEmail(), DigestUtils.md5Hex(requestLogin.getPassword()))) {
            return ResponseEntity.status(403).build();
        }
        User user = userRepository.findByEmail(requestLogin.getEmail());
        return ResponseEntity.ok(user);
    }

    @PostMapping("/registration")
    public ResponseEntity<?> registration(@RequestBody RequestRegistration registration) {
        if (registration == null ||
                registration.getEmail() == null ||
                registration.getEmail().isEmpty() ||
                registration.getPassword() == null ||
                registration.getPassword().isEmpty() ||
                registration.getName() == null ||
                registration.getName().isEmpty() ||
                registration.getSurname() == null ||
                registration.getSurname().isEmpty() ||
                registration.getPhoneNumber() == null ||
                registration.getPhoneNumber().isEmpty() ||
                registration.getBirthday() == null)
            return ResponseEntity.badRequest().build();
        if (userRepository.existsByEmail(registration.getEmail())) {
            return ResponseEntity.status(409).build();
        }
        User newUser = userConverter.from(registration);
        userRepository.save(newUser);
        return ResponseEntity.created(URI.create("")).build();
    }
}
