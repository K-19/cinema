package by.bsuir.drankovich.cinema.model.request;

import lombok.Data;

@Data
public class OrderRequest {
    private Long user;
    private Long seance;
    private Integer tickets;
}
