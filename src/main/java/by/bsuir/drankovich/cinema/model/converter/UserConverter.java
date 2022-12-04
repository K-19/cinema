package by.bsuir.drankovich.cinema.model.converter;

import by.bsuir.drankovich.cinema.model.entity.User;
import by.bsuir.drankovich.cinema.requests.RequestRegistration;
import org.apache.commons.codec.digest.DigestUtils;
import org.springframework.stereotype.Component;

@Component
public class UserConverter {
    public User from(RequestRegistration request) {
        return User.builder()
                .surname(request.getSurname())
                .name(request.getName())
                .birthday(request.getBirthday())
                .email(request.getEmail())
                .phoneNumber(request.getPhoneNumber())
                .password(DigestUtils.md5Hex(request.getPassword()))
                .build();
    }
}
