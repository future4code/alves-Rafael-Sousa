create table movie (
id varchar (255) primary key, 
titulo varchar (255) not null,
sinopse varchar(500) not null, 
lançamento date not null,
 avaliação int not null );
 
 INSERT INTO movie (id, titulo, sinopse, lançamento, avaliação)
 VALUES (
"005",
"kung fu panda",
"um panda gordo que quer ser lutador de kung fu",
 "2008-07-04",
 10
 );
 
 INSERT INTO movie (id, titulo, sinopse, lançamento, avaliação)
 VALUES (
"006",
"RIO",
"um papagaio azul dançarino de samba",
 "2008-07-04",
 10
 );
 
 INSERT INTO movie (id, titulo, sinopse, lançamento, avaliação)
 VALUES (
"004",
"Doce de mãe",
"Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
 "2012-12-27",
 10
 );
 
 INSERT INTO movie (id, titulo, sinopse, lançamento, avaliação)
 VALUES (
"003",
"Dona Flor e Seus Dois Maridos",
"Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce. ",
 "2017-11-02",
 10
 );
 
 INSERT INTO movie (id, titulo, sinopse, lançamento, avaliação)
 VALUES (
"002",
"Os farofeiros",
"Quatro colegas de trabalho se programam para curtir o feriado prolongado em uma casa de praia. Lá, eles descobrem que se meteram em uma tremenda roubada.",
 "2018-03-08",
 10
 );
 
INSERT INTO movie (id, titulo, sinopse, lançamento, avaliação)
 VALUES (
"001",
"King Kong",
" O diretor Carl Denham e sua equipe embarcam em uma viagem de Nova York até uma ilha misteriosa para as filmagens de um novo longa. Na expedição, estão o dramaturgo Jack Driscoll e a atriz Ann Darrow, que é raptada por um gorila gigantesco depois que a equipe desembarca no local. Enquanto procuram por Ann, o grupo se depara com dinossauros e outras criaturas pré-históricas incríveis, assustadoras e perigosas",
 "2005-12-16",
 6
 );
 
 Select id, titulo , avaliação from movie where id= 001;
 
select * from movie where titulo = "Os farofeiros";

select id, titulo, sinopse from movie where avaliação < 7;
 
 select * from movie where titulo = "vida";
 
SELECT * FROM movie WHERE titulo LIKE "%A%" OR sinopse LIKE "%a%";

select * from movie where lançamento < "2022-08-22";

SELECT * FROM movie
WHERE lançamento < "2022-08-22" AND 
      (titulo LIKE "%A%" OR
      sinopse LIKE "%i%") AND avaliação > 7;
      
 alter table movie add playing_limit_date  date;   
 
 ALTER TABLE movie CHANGE avaliação rating FLOAT;
 
update movie
set
playing_limit_date = "2020-12-31"
where id = "001";

 delete from movie where id = "001";
 
 update movie
 set 
 sinopse =" O diretor Carl Denham e sua equipe embarcam em uma viagem de Nova York até uma ilha misteriosa para as filmagens de um novo longa. Na expedição, estão o dramaturgo Jack Driscoll e a atriz Ann Darrow, que é raptada por um gorila gigantesco depois que a equipe desembarca no local. Enquanto procuram por Ann, o grupo se depara com dinossauros e outras criaturas pré-históricas incríveis, assustadoras e perigosas"
 where id ="001";
 
 select count(*) from movie where rating > 7.5;
 
 select avg(rating) from movie ;
 
 select count(*) from movie where playing_limit_date > curdate();
 
 select count(*) from movie where lançamento > curdate();
 
 select max(rating) from movie;
 
 select min(rating) from movie;
 
 select* from movie 
 order by titulo;
 
 select* from movie 
 order by titulo 
 limit 5;
 
 select * from movie
 where playing_limit_date > curdate()
 order by lançamento
 limit 3;
 
 select * from movie
 order by rating desc
 limit 3
 
 