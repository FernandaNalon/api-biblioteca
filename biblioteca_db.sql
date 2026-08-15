CREATE DATABASE biblioteca_db;
USE biblioteca_db;
CREATE TABLE livro (
	id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(150) NOT NULL,
    autor VARCHAR(100) NOT NULL,
    ano INT NOT NULL,
    disponivel BOOLEAN NOT NULL DEFAULT TRUE
);

CREATE TABLE autor (
	id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(200) NOT NULL,
    nacionalidade VARCHAR(150) NOT NULL,
    ano_nascimento INT(4) NOT NULL
);