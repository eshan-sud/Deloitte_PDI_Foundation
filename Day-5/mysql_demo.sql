-- MySQL Demo Queries

CREATE DATABASE movies;
USE movies;

CREATE TABLE actors(
	actor_id INT PRIMARY KEY AUTO_INCREMENT,
	actor_name VARCHAR(100) NOT NULL,
	gender TINYINT NOT NULL
);

DESCRIBE actors;

ALTER TABLE actors ADD COLUMN created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP;

INSERT INTO actors(actor_name, gender)
VALUES
('eshan',0),
('kajal',1),
('arjun',0),
('kiran',0);

SELECT * FROM actors;

SHOW TABLES;

DROP TABLE actors;
