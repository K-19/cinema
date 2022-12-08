create table if not exists public.users
(
    id           bigserial
        primary key,
    surname      varchar,
    name         varchar,
    phone_number varchar,
    email        varchar,
    password     varchar,
    is_admin     boolean,
    birthday     date
);

insert into public.users (surname, name, phone_number, email, password, is_admin) values ('admin', 'admin', 'admin', 'admin', 'admin', true);

alter table public.users
    owner to postgres;

create table if not exists public.cinemas
(
    id            bigserial
        constraint cinemas_pk
            primary key,
    name          varchar,
    count_tickets integer
);

alter table public.cinemas
    owner to postgres;

create unique index if not exists cinemas_id_uindex
    on public.cinemas (id);

create table if not exists public.films
(
    id       bigserial
        constraint films_pk
            primary key,
    name     varchar,
    duration integer
);

alter table public.films
    owner to postgres;

create unique index if not exists films_id_uindex
    on public.films (id);

create table if not exists public.seances
(
    id                bigserial
        constraint seances_pk
            primary key,
    start             timestamp,
    film_id           bigint
        constraint seances_films_id_fk
            references public.films
            on update cascade on delete cascade,
    cinema_id         bigint
        constraint seances_cinemas_id_fk
            references public.cinemas
            on update cascade on delete cascade,
    remaining_tickets integer
);

alter table public.seances
    owner to postgres;

create unique index if not exists seances_id_uindex
    on public.seances (id);

create table if not exists public.orders
(
    id            bigserial
        constraint orders_pk
            primary key,
    user_id       bigint
        constraint orders_users_id_fk
            references public.users
            on update cascade on delete cascade,
    seance_id     bigint
        constraint orders_seances_id_fk
            references public.seances
            on update cascade on delete cascade,
    tickets_count integer
);

alter table public.orders
    owner to postgres;

create unique index if not exists orders_id_uindex
    on public.orders (id);

