CREATE TABLE Movie (
		id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
		rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id)
);

INSERT INTO Movie (id, comment, rate, movie_id) 
VALUES (

"002", "chupa cabra", 9.1, "003"
);

ALTER TABLE Movie DROP COLUMN rate;

CREATE TABLE MovieCast (
		movie_id VARCHAR(255),
		actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);

INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
    "001",
    "002",
    "003",
    "004",
    "005",
    "006"
)