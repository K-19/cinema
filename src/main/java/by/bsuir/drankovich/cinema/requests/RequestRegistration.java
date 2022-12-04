package by.bsuir.drankovich.cinema.requests;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class RequestRegistration {
    private String surname;
    private String name;
    private String phoneNumber;
    private String email;
    private LocalDate birthday;
    private String password;
    private boolean isAdmin;
}
