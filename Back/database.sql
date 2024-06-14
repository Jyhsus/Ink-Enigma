-- public.songs definition

-- Drop table

-- DROP TABLE public.songs;

CREATE TABLE palabra (
    id_palabra SERIAL PRIMARY KEY,
    texto VARCHAR(255) NOT NULL
);

CREATE TABLE categoria (
    id_categoria SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL
);

CREATE TABLE palabras_por_categoria (
    id_palabra INT,
    id_categoria INT,
    FOREIGN KEY (id_palabra) REFERENCES palabra(id_palabra),
    FOREIGN KEY (id_categoria) REFERENCES categoria(id_categoria),
    PRIMARY KEY (id_palabra, id_categoria)
);

CREATE TABLE sala_de_juego (
    id_sala SERIAL PRIMARY KEY,
    nombre VARCHAR(100),
    id_categoria INT,
    estado VARCHAR(20),
    FOREIGN KEY (id_categoria) REFERENCES categoria(id_categoria)
);