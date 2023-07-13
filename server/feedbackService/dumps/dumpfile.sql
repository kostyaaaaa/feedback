--
-- PostgreSQL database dump
--

-- Dumped from database version 15.3 (Debian 15.3-1.pgdg120+1)
-- Dumped by pg_dump version 15.3 (Debian 15.3-1.pgdg120+1)

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

--
-- Name: enum_Messages_status; Type: TYPE; Schema: public; Owner: admin_user
--

CREATE TYPE public."enum_Messages_status" AS ENUM (
    'read',
    'unread'
);


ALTER TYPE public."enum_Messages_status" OWNER TO admin_user;

--
-- Name: enum_Users_gender; Type: TYPE; Schema: public; Owner: admin_user
--

CREATE TYPE public."enum_Users_gender" AS ENUM (
    'male',
    'female'
);


ALTER TYPE public."enum_Users_gender" OWNER TO admin_user;

--
-- Name: enum_Users_role; Type: TYPE; Schema: public; Owner: admin_user
--

CREATE TYPE public."enum_Users_role" AS ENUM (
    'admin',
    'user',
    'owner'
);


ALTER TYPE public."enum_Users_role" OWNER TO admin_user;

--
-- Name: enum_Users_status; Type: TYPE; Schema: public; Owner: admin_user
--

CREATE TYPE public."enum_Users_status" AS ENUM (
    'active',
    'banned'
);


ALTER TYPE public."enum_Users_status" OWNER TO admin_user;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: Chats; Type: TABLE; Schema: public; Owner: admin_user
--

CREATE TABLE public."Chats" (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."Chats" OWNER TO admin_user;

--
-- Name: Chats_id_seq; Type: SEQUENCE; Schema: public; Owner: admin_user
--

CREATE SEQUENCE public."Chats_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Chats_id_seq" OWNER TO admin_user;

--
-- Name: Chats_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: admin_user
--

ALTER SEQUENCE public."Chats_id_seq" OWNED BY public."Chats".id;


--
-- Name: Feedbacks; Type: TABLE; Schema: public; Owner: admin_user
--

CREATE TABLE public."Feedbacks" (
    id integer NOT NULL,
    "authorId" integer,
    "placeId" integer,
    rate double precision,
    text character varying(255),
    photos character varying(255)[] DEFAULT (ARRAY[]::character varying[])::character varying(255)[],
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."Feedbacks" OWNER TO admin_user;

--
-- Name: Feedbacks_id_seq; Type: SEQUENCE; Schema: public; Owner: admin_user
--

CREATE SEQUENCE public."Feedbacks_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Feedbacks_id_seq" OWNER TO admin_user;

--
-- Name: Feedbacks_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: admin_user
--

ALTER SEQUENCE public."Feedbacks_id_seq" OWNED BY public."Feedbacks".id;


--
-- Name: Messages; Type: TABLE; Schema: public; Owner: admin_user
--

CREATE TABLE public."Messages" (
    id integer NOT NULL,
    "authorId" integer,
    "chatId" integer,
    "imageUrl" character varying(255),
    text character varying(255),
    status public."enum_Messages_status",
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."Messages" OWNER TO admin_user;

--
-- Name: Messages_id_seq; Type: SEQUENCE; Schema: public; Owner: admin_user
--

CREATE SEQUENCE public."Messages_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Messages_id_seq" OWNER TO admin_user;

--
-- Name: Messages_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: admin_user
--

ALTER SEQUENCE public."Messages_id_seq" OWNED BY public."Messages".id;


--
-- Name: Places; Type: TABLE; Schema: public; Owner: admin_user
--

CREATE TABLE public."Places" (
    id integer NOT NULL,
    address character varying(255) NOT NULL,
    name character varying(255) NOT NULL,
    photos character varying(255)[] DEFAULT (ARRAY[]::character varying[])::character varying(255)[],
    tags character varying(255)[] DEFAULT (ARRAY[]::character varying[])::character varying(255)[],
    description character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "ownerId" integer
);


ALTER TABLE public."Places" OWNER TO admin_user;

--
-- Name: Places_id_seq; Type: SEQUENCE; Schema: public; Owner: admin_user
--

CREATE SEQUENCE public."Places_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Places_id_seq" OWNER TO admin_user;

--
-- Name: Places_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: admin_user
--

ALTER SEQUENCE public."Places_id_seq" OWNED BY public."Places".id;


--
-- Name: UserChats; Type: TABLE; Schema: public; Owner: admin_user
--

CREATE TABLE public."UserChats" (
    id integer NOT NULL,
    "userId" integer,
    "chatId" integer,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."UserChats" OWNER TO admin_user;

--
-- Name: UserChats_id_seq; Type: SEQUENCE; Schema: public; Owner: admin_user
--

CREATE SEQUENCE public."UserChats_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."UserChats_id_seq" OWNER TO admin_user;

--
-- Name: UserChats_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: admin_user
--

ALTER SEQUENCE public."UserChats_id_seq" OWNED BY public."UserChats".id;


--
-- Name: Users; Type: TABLE; Schema: public; Owner: admin_user
--

CREATE TABLE public."Users" (
    id integer NOT NULL,
    "firstName" character varying(255) NOT NULL,
    "lastName" character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    role public."enum_Users_role" DEFAULT 'user'::public."enum_Users_role",
    "profileUrl" character varying(255),
    gender public."enum_Users_gender" NOT NULL,
    status public."enum_Users_status" DEFAULT 'active'::public."enum_Users_status",
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."Users" OWNER TO admin_user;

--
-- Name: Users_id_seq; Type: SEQUENCE; Schema: public; Owner: admin_user
--

CREATE SEQUENCE public."Users_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Users_id_seq" OWNER TO admin_user;

--
-- Name: Users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: admin_user
--

ALTER SEQUENCE public."Users_id_seq" OWNED BY public."Users".id;


--
-- Name: Chats id; Type: DEFAULT; Schema: public; Owner: admin_user
--

ALTER TABLE ONLY public."Chats" ALTER COLUMN id SET DEFAULT nextval('public."Chats_id_seq"'::regclass);


--
-- Name: Feedbacks id; Type: DEFAULT; Schema: public; Owner: admin_user
--

ALTER TABLE ONLY public."Feedbacks" ALTER COLUMN id SET DEFAULT nextval('public."Feedbacks_id_seq"'::regclass);


--
-- Name: Messages id; Type: DEFAULT; Schema: public; Owner: admin_user
--

ALTER TABLE ONLY public."Messages" ALTER COLUMN id SET DEFAULT nextval('public."Messages_id_seq"'::regclass);


--
-- Name: Places id; Type: DEFAULT; Schema: public; Owner: admin_user
--

ALTER TABLE ONLY public."Places" ALTER COLUMN id SET DEFAULT nextval('public."Places_id_seq"'::regclass);


--
-- Name: UserChats id; Type: DEFAULT; Schema: public; Owner: admin_user
--

ALTER TABLE ONLY public."UserChats" ALTER COLUMN id SET DEFAULT nextval('public."UserChats_id_seq"'::regclass);


--
-- Name: Users id; Type: DEFAULT; Schema: public; Owner: admin_user
--

ALTER TABLE ONLY public."Users" ALTER COLUMN id SET DEFAULT nextval('public."Users_id_seq"'::regclass);


--
-- Data for Name: Chats; Type: TABLE DATA; Schema: public; Owner: admin_user
--

COPY public."Chats" (id, name, "createdAt", "updatedAt") FROM stdin;
\.


--
-- Data for Name: Feedbacks; Type: TABLE DATA; Schema: public; Owner: admin_user
--

COPY public."Feedbacks" (id, "authorId", "placeId", rate, text, photos, "createdAt", "updatedAt") FROM stdin;
\.


--
-- Data for Name: Messages; Type: TABLE DATA; Schema: public; Owner: admin_user
--

COPY public."Messages" (id, "authorId", "chatId", "imageUrl", text, status, "createdAt", "updatedAt") FROM stdin;
\.


--
-- Data for Name: Places; Type: TABLE DATA; Schema: public; Owner: admin_user
--

COPY public."Places" (id, address, name, photos, tags, description, "createdAt", "updatedAt", "ownerId") FROM stdin;
\.


--
-- Data for Name: UserChats; Type: TABLE DATA; Schema: public; Owner: admin_user
--

COPY public."UserChats" (id, "userId", "chatId", "createdAt", "updatedAt") FROM stdin;
\.


--
-- Data for Name: Users; Type: TABLE DATA; Schema: public; Owner: admin_user
--

COPY public."Users" (id, "firstName", "lastName", email, password, role, "profileUrl", gender, status, "createdAt", "updatedAt") FROM stdin;
1	Kostyantyn	Arabadzhi	kostyaarabadji@gmail.com	123456	user	\N	male	active	2023-07-13 12:51:01.176+00	2023-07-13 12:51:01.176+00
2	Evhenii	Syrovatka	evsyrovatka@gmail.com	123456	user	\N	male	active	2023-07-13 12:51:01.176+00	2023-07-13 12:51:01.176+00
3	Rodion	Ivanov	ivanovrodion.io92@gmail.com	123456	user	\N	male	active	2023-07-13 12:51:01.176+00	2023-07-13 12:51:01.176+00
\.


--
-- Name: Chats_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin_user
--

SELECT pg_catalog.setval('public."Chats_id_seq"', 1, false);


--
-- Name: Feedbacks_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin_user
--

SELECT pg_catalog.setval('public."Feedbacks_id_seq"', 1, false);


--
-- Name: Messages_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin_user
--

SELECT pg_catalog.setval('public."Messages_id_seq"', 1, false);


--
-- Name: Places_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin_user
--

SELECT pg_catalog.setval('public."Places_id_seq"', 1, false);


--
-- Name: UserChats_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin_user
--

SELECT pg_catalog.setval('public."UserChats_id_seq"', 1, false);


--
-- Name: Users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin_user
--

SELECT pg_catalog.setval('public."Users_id_seq"', 1, false);


--
-- Name: Chats Chats_pkey; Type: CONSTRAINT; Schema: public; Owner: admin_user
--

ALTER TABLE ONLY public."Chats"
    ADD CONSTRAINT "Chats_pkey" PRIMARY KEY (id);


--
-- Name: Feedbacks Feedbacks_pkey; Type: CONSTRAINT; Schema: public; Owner: admin_user
--

ALTER TABLE ONLY public."Feedbacks"
    ADD CONSTRAINT "Feedbacks_pkey" PRIMARY KEY (id);


--
-- Name: Messages Messages_pkey; Type: CONSTRAINT; Schema: public; Owner: admin_user
--

ALTER TABLE ONLY public."Messages"
    ADD CONSTRAINT "Messages_pkey" PRIMARY KEY (id);


--
-- Name: Places Places_address_key; Type: CONSTRAINT; Schema: public; Owner: admin_user
--

ALTER TABLE ONLY public."Places"
    ADD CONSTRAINT "Places_address_key" UNIQUE (address);


--
-- Name: Places Places_pkey; Type: CONSTRAINT; Schema: public; Owner: admin_user
--

ALTER TABLE ONLY public."Places"
    ADD CONSTRAINT "Places_pkey" PRIMARY KEY (id);


--
-- Name: UserChats UserChats_pkey; Type: CONSTRAINT; Schema: public; Owner: admin_user
--

ALTER TABLE ONLY public."UserChats"
    ADD CONSTRAINT "UserChats_pkey" PRIMARY KEY (id);


--
-- Name: UserChats UserChats_userId_chatId_key; Type: CONSTRAINT; Schema: public; Owner: admin_user
--

ALTER TABLE ONLY public."UserChats"
    ADD CONSTRAINT "UserChats_userId_chatId_key" UNIQUE ("userId", "chatId");


--
-- Name: Users Users_email_key; Type: CONSTRAINT; Schema: public; Owner: admin_user
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key" UNIQUE (email);


--
-- Name: Users Users_pkey; Type: CONSTRAINT; Schema: public; Owner: admin_user
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_pkey" PRIMARY KEY (id);


--
-- Name: Feedbacks Feedbacks_authorId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: admin_user
--

ALTER TABLE ONLY public."Feedbacks"
    ADD CONSTRAINT "Feedbacks_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES public."Users"(id) ON UPDATE CASCADE;


--
-- Name: Feedbacks Feedbacks_placeId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: admin_user
--

ALTER TABLE ONLY public."Feedbacks"
    ADD CONSTRAINT "Feedbacks_placeId_fkey" FOREIGN KEY ("placeId") REFERENCES public."Places"(id) ON UPDATE CASCADE;


--
-- Name: Messages Messages_authorId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: admin_user
--

ALTER TABLE ONLY public."Messages"
    ADD CONSTRAINT "Messages_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES public."Users"(id) ON UPDATE CASCADE;


--
-- Name: Messages Messages_chatId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: admin_user
--

ALTER TABLE ONLY public."Messages"
    ADD CONSTRAINT "Messages_chatId_fkey" FOREIGN KEY ("chatId") REFERENCES public."Chats"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: Places Places_ownerId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: admin_user
--

ALTER TABLE ONLY public."Places"
    ADD CONSTRAINT "Places_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES public."Users"(id) ON UPDATE CASCADE;


--
-- Name: UserChats UserChats_chatId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: admin_user
--

ALTER TABLE ONLY public."UserChats"
    ADD CONSTRAINT "UserChats_chatId_fkey" FOREIGN KEY ("chatId") REFERENCES public."Chats"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: UserChats UserChats_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: admin_user
--

ALTER TABLE ONLY public."UserChats"
    ADD CONSTRAINT "UserChats_userId_fkey" FOREIGN KEY ("userId") REFERENCES public."Users"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--

