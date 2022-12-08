--
-- PostgreSQL database dump
--

-- Dumped from database version 14.2
-- Dumped by pg_dump version 14.2

-- Started on 2022-12-08 12:18:04

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 212 (class 1259 OID 57835)
-- Name: cinemas; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.cinemas (
    id bigint NOT NULL,
    name character varying,
    count_tickets integer
);


ALTER TABLE public.cinemas OWNER TO postgres;

--
-- TOC entry 211 (class 1259 OID 57834)
-- Name: cinemas_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.cinemas_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.cinemas_id_seq OWNER TO postgres;

--
-- TOC entry 3361 (class 0 OID 0)
-- Dependencies: 211
-- Name: cinemas_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.cinemas_id_seq OWNED BY public.cinemas.id;


--
-- TOC entry 214 (class 1259 OID 57845)
-- Name: films; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.films (
    id bigint NOT NULL,
    name character varying,
    duration integer
);


ALTER TABLE public.films OWNER TO postgres;

--
-- TOC entry 213 (class 1259 OID 57844)
-- Name: films_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.films_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.films_id_seq OWNER TO postgres;

--
-- TOC entry 3362 (class 0 OID 0)
-- Dependencies: 213
-- Name: films_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.films_id_seq OWNED BY public.films.id;


--
-- TOC entry 218 (class 1259 OID 57880)
-- Name: orders; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.orders (
    id bigint NOT NULL,
    user_id bigint,
    seance_id bigint,
    tickets_count integer
);


ALTER TABLE public.orders OWNER TO postgres;

--
-- TOC entry 217 (class 1259 OID 57879)
-- Name: orders_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.orders_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.orders_id_seq OWNER TO postgres;

--
-- TOC entry 3363 (class 0 OID 0)
-- Dependencies: 217
-- Name: orders_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.orders_id_seq OWNED BY public.orders.id;


--
-- TOC entry 216 (class 1259 OID 57862)
-- Name: seances; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.seances (
    id bigint NOT NULL,
    start timestamp without time zone,
    film_id bigint,
    cinema_id bigint,
    remaining_tickets integer
);


ALTER TABLE public.seances OWNER TO postgres;

--
-- TOC entry 215 (class 1259 OID 57861)
-- Name: seances_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.seances_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.seances_id_seq OWNER TO postgres;

--
-- TOC entry 3364 (class 0 OID 0)
-- Dependencies: 215
-- Name: seances_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.seances_id_seq OWNED BY public.seances.id;


--
-- TOC entry 209 (class 1259 OID 57807)
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id bigint NOT NULL,
    surname character varying,
    name character varying,
    phone_number character varying,
    email character varying,
    password character varying,
    is_admin boolean,
    birthday date
);


ALTER TABLE public.users OWNER TO postgres;

--
-- TOC entry 210 (class 1259 OID 57832)
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO postgres;

--
-- TOC entry 3365 (class 0 OID 0)
-- Dependencies: 210
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- TOC entry 3185 (class 2604 OID 57838)
-- Name: cinemas id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cinemas ALTER COLUMN id SET DEFAULT nextval('public.cinemas_id_seq'::regclass);


--
-- TOC entry 3186 (class 2604 OID 57848)
-- Name: films id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.films ALTER COLUMN id SET DEFAULT nextval('public.films_id_seq'::regclass);


--
-- TOC entry 3188 (class 2604 OID 57883)
-- Name: orders id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orders ALTER COLUMN id SET DEFAULT nextval('public.orders_id_seq'::regclass);


--
-- TOC entry 3187 (class 2604 OID 57865)
-- Name: seances id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.seances ALTER COLUMN id SET DEFAULT nextval('public.seances_id_seq'::regclass);


--
-- TOC entry 3184 (class 2604 OID 57833)
-- Name: users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- TOC entry 3349 (class 0 OID 57835)
-- Dependencies: 212
-- Data for Name: cinemas; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.cinemas (id, name, count_tickets) VALUES (55, 'Берестье', 200);


--
-- TOC entry 3351 (class 0 OID 57845)
-- Dependencies: 214
-- Data for Name: films; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.films (id, name, duration) VALUES (43, 'Гарри Поттер и Дары Смерти Часть 2', 8573);


--
-- TOC entry 3355 (class 0 OID 57880)
-- Dependencies: 218
-- Data for Name: orders; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.orders (id, user_id, seance_id, tickets_count) VALUES (17, 16, 27, 13);
INSERT INTO public.orders (id, user_id, seance_id, tickets_count) VALUES (18, 16, 26, 16);
INSERT INTO public.orders (id, user_id, seance_id, tickets_count) VALUES (19, 16, 26, 1);
INSERT INTO public.orders (id, user_id, seance_id, tickets_count) VALUES (20, 16, 26, 3);
INSERT INTO public.orders (id, user_id, seance_id, tickets_count) VALUES (21, 16, 26, 3);
INSERT INTO public.orders (id, user_id, seance_id, tickets_count) VALUES (22, 16, 26, 1);
INSERT INTO public.orders (id, user_id, seance_id, tickets_count) VALUES (24, 16, 29, 1);
INSERT INTO public.orders (id, user_id, seance_id, tickets_count) VALUES (25, 16, 30, 1);
INSERT INTO public.orders (id, user_id, seance_id, tickets_count) VALUES (26, 16, 30, 1);
INSERT INTO public.orders (id, user_id, seance_id, tickets_count) VALUES (29, 16, 38, 2);
INSERT INTO public.orders (id, user_id, seance_id, tickets_count) VALUES (30, 16, 38, 1);
INSERT INTO public.orders (id, user_id, seance_id, tickets_count) VALUES (31, 16, 38, 1);
INSERT INTO public.orders (id, user_id, seance_id, tickets_count) VALUES (32, 16, 38, 1);
INSERT INTO public.orders (id, user_id, seance_id, tickets_count) VALUES (33, 16, 38, 1);
INSERT INTO public.orders (id, user_id, seance_id, tickets_count) VALUES (34, 16, 38, 1);


--
-- TOC entry 3353 (class 0 OID 57862)
-- Dependencies: 216
-- Data for Name: seances; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.seances (id, start, film_id, cinema_id, remaining_tickets) VALUES (26, '2022-12-04 20:59:00', 43, 55, 166);
INSERT INTO public.seances (id, start, film_id, cinema_id, remaining_tickets) VALUES (31, '2022-12-06 20:12:37.732', 43, 55, 200);
INSERT INTO public.seances (id, start, film_id, cinema_id, remaining_tickets) VALUES (29, '2022-12-06 03:54:00', 43, 55, 199);
INSERT INTO public.seances (id, start, film_id, cinema_id, remaining_tickets) VALUES (30, '2022-12-06 03:54:00', 43, 55, 198);
INSERT INTO public.seances (id, start, film_id, cinema_id, remaining_tickets) VALUES (37, '2022-12-06 22:44:00', 43, 55, 200);
INSERT INTO public.seances (id, start, film_id, cinema_id, remaining_tickets) VALUES (36, '2022-12-06 21:44:00', 43, 55, 200);
INSERT INTO public.seances (id, start, film_id, cinema_id, remaining_tickets) VALUES (38, '2022-12-08 14:53:00', 43, 55, 193);
INSERT INTO public.seances (id, start, film_id, cinema_id, remaining_tickets) VALUES (39, '2022-12-08 12:08:43.045', 43, 55, 200);
INSERT INTO public.seances (id, start, film_id, cinema_id, remaining_tickets) VALUES (27, '2022-12-04 16:49:00', 43, 55, 187);


--
-- TOC entry 3346 (class 0 OID 57807)
-- Dependencies: 209
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.users (id, surname, name, phone_number, email, password, is_admin, birthday) VALUES (1, 'Filinovich', 'Sergei', '+375292784340', 'sergeifilinovich01@gmail.com', 'd66a988cec470e514461d4daf44ad471', false, '2001-11-16');
INSERT INTO public.users (id, surname, name, phone_number, email, password, is_admin, birthday) VALUES (2, 'Filinovich', 'Sergei', '+375292784340', 'sergeifilinovich01@gmail.comm', 'd66a988cec470e514461d4daf44ad471', false, '2001-11-16');
INSERT INTO public.users (id, surname, name, phone_number, email, password, is_admin, birthday) VALUES (4, '', '', '', '', 'd41d8cd98f00b204e9800998ecf8427e', false, NULL);
INSERT INTO public.users (id, surname, name, phone_number, email, password, is_admin, birthday) VALUES (5, '', '', '', '', 'd41d8cd98f00b204e9800998ecf8427e', false, NULL);
INSERT INTO public.users (id, surname, name, phone_number, email, password, is_admin, birthday) VALUES (6, '', '', '', 'fgbfg', 'd41d8cd98f00b204e9800998ecf8427e', false, NULL);
INSERT INTO public.users (id, surname, name, phone_number, email, password, is_admin, birthday) VALUES (7, '', '', '', 'fgbfg', 'd41d8cd98f00b204e9800998ecf8427e', false, NULL);
INSERT INTO public.users (id, surname, name, phone_number, email, password, is_admin, birthday) VALUES (8, '', '', '', 'fgbfgfv', 'd41d8cd98f00b204e9800998ecf8427e', false, NULL);
INSERT INTO public.users (id, surname, name, phone_number, email, password, is_admin, birthday) VALUES (9, '', '', '', 'fgbfgfv', 'd41d8cd98f00b204e9800998ecf8427e', false, NULL);
INSERT INTO public.users (id, surname, name, phone_number, email, password, is_admin, birthday) VALUES (10, 'admin', 'admin', 'апиопаио', 'admin', '21232f297a57a5a743894a0e4a801fc3', true, '2001-01-01');
INSERT INTO public.users (id, surname, name, phone_number, email, password, is_admin, birthday) VALUES (16, 'user', 'user', 'user', 'user', 'ee11cbb19052e40b07aac0ca060c23ee', false, '2001-01-01');
INSERT INTO public.users (id, surname, name, phone_number, email, password, is_admin, birthday) VALUES (18, 'Филинович', 'Сергей', '+375292784340', 'K19', '96fec837051e0f49e140b3a9b95e81df', false, '2001-01-01');


--
-- TOC entry 3366 (class 0 OID 0)
-- Dependencies: 211
-- Name: cinemas_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.cinemas_id_seq', 89, true);


--
-- TOC entry 3367 (class 0 OID 0)
-- Dependencies: 213
-- Name: films_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.films_id_seq', 44, true);


--
-- TOC entry 3368 (class 0 OID 0)
-- Dependencies: 217
-- Name: orders_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.orders_id_seq', 34, true);


--
-- TOC entry 3369 (class 0 OID 0)
-- Dependencies: 215
-- Name: seances_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.seances_id_seq', 39, true);


--
-- TOC entry 3370 (class 0 OID 0)
-- Dependencies: 210
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_id_seq', 18, true);


--
-- TOC entry 3193 (class 2606 OID 57842)
-- Name: cinemas cinemas_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cinemas
    ADD CONSTRAINT cinemas_pk PRIMARY KEY (id);


--
-- TOC entry 3196 (class 2606 OID 57852)
-- Name: films films_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.films
    ADD CONSTRAINT films_pk PRIMARY KEY (id);


--
-- TOC entry 3202 (class 2606 OID 57885)
-- Name: orders orders_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_pk PRIMARY KEY (id);


--
-- TOC entry 3199 (class 2606 OID 57867)
-- Name: seances seances_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.seances
    ADD CONSTRAINT seances_pk PRIMARY KEY (id);


--
-- TOC entry 3190 (class 2606 OID 57813)
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- TOC entry 3191 (class 1259 OID 57843)
-- Name: cinemas_id_uindex; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX cinemas_id_uindex ON public.cinemas USING btree (id);


--
-- TOC entry 3194 (class 1259 OID 57853)
-- Name: films_id_uindex; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX films_id_uindex ON public.films USING btree (id);


--
-- TOC entry 3200 (class 1259 OID 57886)
-- Name: orders_id_uindex; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX orders_id_uindex ON public.orders USING btree (id);


--
-- TOC entry 3197 (class 1259 OID 57868)
-- Name: seances_id_uindex; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX seances_id_uindex ON public.seances USING btree (id);


--
-- TOC entry 3206 (class 2606 OID 57893)
-- Name: orders orders_seances_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_seances_id_fk FOREIGN KEY (seance_id) REFERENCES public.seances(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 3205 (class 2606 OID 57887)
-- Name: orders orders_users_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_users_id_fk FOREIGN KEY (user_id) REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 3204 (class 2606 OID 57874)
-- Name: seances seances_cinemas_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.seances
    ADD CONSTRAINT seances_cinemas_id_fk FOREIGN KEY (cinema_id) REFERENCES public.cinemas(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 3203 (class 2606 OID 57869)
-- Name: seances seances_films_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.seances
    ADD CONSTRAINT seances_films_id_fk FOREIGN KEY (film_id) REFERENCES public.films(id) ON UPDATE CASCADE ON DELETE CASCADE;


-- Completed on 2022-12-08 12:18:04

--
-- PostgreSQL database dump complete
--

