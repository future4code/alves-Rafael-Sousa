CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);

show databases;
show tables;
DESCRIBE Actor;

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "001", 
  "Tony Ramos",
  400000,
  "1948-08-25", 
  "male"
);
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"002",
"Glória Pires",
1200000,
"1963-08-23 ",
"female"
);
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"003",
"Rafael Santos",
1200000,
"2001-09-23 ",
"male"
);

INSERT INTO Actor (id, name, salary)
VALUES(
  "004", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

INSERT INTO Actor (id, salary, birth_date, gender)
VALUES(
  "004",
  400000,
  "1949-04-18", 
  "male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  1979-03-26, 
  "female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004", 
  "Antônio Fagundes",
  400000,
  "1949-04-18", 
  "male"
);
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
SELECT id, salary from Actor ;
SELECT id, name from Actor WHERE gender = "male";
SELECT * from Actor WHERE gender = "female";
SELECT salary from Actor WHERE name = "Tony Ramos";
SELECT * from Actor Where gender = "invalid";
SELECT *from Actor Where salary <=500000;
SELECT id, name from Actor WHERE id = "002";

SELECT * FROM Actor
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000;

SELECT * FROM Actor
WHERE (name  not LIKE "A%" OR name not LIKE "J%") AND salary > 350000;

Select * from Actor
where name like "%G%" or name like "%g%";

Select * from Actor
where (name like "%A%" or name like "%a%" or name like "%G%" or name like "%g%") and salary between 350000 and 900000;


 
 
 