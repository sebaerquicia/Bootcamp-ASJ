--1 Listar todos los artitas por Discografica, ordenados por el nombre del artista
select a.nombre, d.nombre
from artista a
join discografica d on d.id = a.discografica_id
order by a.nombre asc

--2 Que Discográfica NO tiene artistas?
select d.nombre
from discografica d
where d.id not in (select a.discografica_id from artista a)

--3 Listar el numero de canciones por artista en orden descendiente
select a.nombre 'Nombre', count(c.id) 'Cantidad de temas'
from canciones c
join album al on al.id = c.album_id
join artista a on a.id = al.artista_id
group by a.nombre
order by count(c.id) desc

--4 Que artista grabó el mayor numero de canciones?
select top 1 a.nombre 'Nombre', count(c.id) 'Cantidad de temas'
from canciones c
join album al on al.id = c.album_id
join artista a on a.id = al.artista_id
group by a.nombre
order by count(c.id) desc

--5 Por cada artista y cada album, cuantas canciones tienen menos de 5 minutos de duracion?
select a.nombre, count(c.id) 'Cantidad de temas < a 5 min'
from artista a
join album al on a.id= al.artista_id
join canciones c on al.artista_id = c.album_id
where c.duracion < 5
group by a.nombre
union
select al.nombre, count (c.id)
from album al
join canciones c on al.id = c.album_id
where c.duracion < 5
group by al.nombre

--artista album cant de temas 

select a.nombre 'Nombre del Artista', al.nombre 'Album', count (c.id)
from album al
join canciones c on al.id = c.album_id
left join artista a on al.artista_id = a.id
where c.duracion < 5
group by a. nombre, al.nombre

--6 En relación con la consulta anterior, muestra también las canciones y su duración
select a.nombre 'Nombre del Artista', al.nombre 'Album', c.nombre 'Cancion', c.duracion 'Duracion(<5min)'
from album al
join canciones c on al.id = c.album_id
left join artista a on al.artista_id = a.id
where c.duracion < 5

--7 Qué artistas grabaron canciones mas largas que 5 minutos, y cuántas canciones fueron?
select a.nombre, count(c.id) 'Cantidad de temas > a 5 min'
from artista a
join album al on a.id= al.artista_id
join canciones c on al.id = c.album_id
where c.duracion > 5.00
group by a.nombre

--8 En que año se grabaron la mayoría de las canciones?
select top 1 al.anio 'Año de grabacion', count(c.id) 'Cantidad de temas grabados'
from canciones c
join album al on c.album_id = al.id
group by al.anio
order by count (c.id) desc

--9 Mostrar el ranking de los 5 artistas, album, canción y año con las canciones más largas
select top 5 a.nombre 'Nombre del Artista', al.nombre 'Album', c.nombre 'Cancion', c.duracion 'Duracion', al.anio 'Año'
from album al
join canciones c on al.id = c.album_id
left join artista a on al.artista_id = a.id
order by c.duracion desc

--10 Duración total de todas las canciones grabadas por cada artista en orden descendente
select a.nombre 'Nombre del Artista',  sum(c.duracion) 'Duracion'
from album al
join canciones c on al.id = c.album_id
left join artista a on al.artista_id = a.id
group by a.nombre 
order by sum(c.duracion) desc

--11 Que artistas y album no tienen canciones de menos de 5 minutos?
select distinct a.nombre 'Nombre del Artista', al.nombre 'Album'
from album al
join canciones c on al.id = c.album_id
join artista a on al.artista_id = a.id
where al.id not in (select al.id
from album al
join canciones c on al.id = c.album_id
join artista a on al.artista_id = a.id
where c.duracion < 5)

--12  Mostrar el top 3 de artistas con el promedio de duración de las canciones, en orden descendente con la canción mas larga primero
select max (duracion) 'Tema mas largo', c.nombre
from canciones c
group by c.nombre
order by max(duracion) desc

select top 3 a.nombre, avg(c.duracion) 'Promedio duracion temas'
from album al
join canciones c on al.id = c.album_id
join artista a on al.artista_id = a.id
group by a.nombre
order by avg(c.duracion) desc


--13 Qué artistas no lanzaron un album durante la decada de 1980 y 1990?
select distinct a.nombre 'Nombre del Artista'
from album al
join artista a on al.artista_id = a.id
where a.id not in (select a.id
from album al
join artista a on al.artista_id = a.id
where al.anio between 1980 and 1990)

--14 Duración total del album Sgt. Pepper's de los Beatles (mostrar en minutos y segundos)
select al.nombre 'Nombre Album', CAST(SUM(c.duracion) AS INT) AS 'Minutos', CAST((SUM(c.duracion)-CAST(SUM(c.duracion) AS INT))*60 AS INT) AS 'Segundos'
from album al
join canciones c on al.id = c.album_id
where al.nombre like 'Sgt. Pepper%'
group by al.nombre