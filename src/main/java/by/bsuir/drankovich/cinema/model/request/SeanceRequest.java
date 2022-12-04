package by.bsuir.drankovich.cinema.model.request;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class SeanceRequest {
    private Long id;
    private Long film;
    private Long cinema;
    private LocalDateTime dateTime;
}
