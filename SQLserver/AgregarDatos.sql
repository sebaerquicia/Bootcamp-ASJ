
INSERT INTO Genero (nombre_genero) 
VALUES 
('Terror'),
('Drama'),
('Rock');
INSERT INTO Categoria (id_genero, nombre_categoria) 
VALUES 
(1, 'Pelicula'),
(2, 'Pelicula'),
(3, 'Musica');

INSERT INTO Pais (nombre_pais) 
VALUES 
('Argentina'),
('Brasil'),
('Uruguay');

INSERT INTO Provincia (id_pais, nombre_provincia) 
VALUES 
(1, 'Santa Fe'),
(1, 'San Juan'),
(1, 'Tucuman'),
(2, 'Rio de Janeiro');

INSERT INTO Direccion (id_provincia, calle, numero, cod_postal) 
VALUES 
(1, 'Mendoza', 3828, 2000),
(1, 'Lavalle', 1200, 2000),
(3, 'Alsina', 3450, 4000);

INSERT INTO Tienda (id_direccion, nombre_tienda) 
VALUES 
(1, 'BlockBusterROS');

INSERT INTO Empleado (id_tienda, nombre, apellido, legajo) 
VALUES 
(1, 'Raul', 'Olmedo', 54),
(1, 'Sebastian', 'Erquicia', 60);

INSERT INTO Cliente (id_direccion, nombre_cliente, apellido_cliente, fecha_nacimiento, mail_cliente, telefono_cliente, dni_cliente, isSocio) 
VALUES 
(1, 'Ana', 'Rosas', '1997/8/8', 'anarosas@gmail.com', 4567586, 39654745, 1),
(2, 'Lucas', 'Simpson', '2000/6/9', 'lucassimpson@gmail.com', 155456985, 42545632, 1);


INSERT INTO MedioPago (nombre_medio) 
VALUES 
('Efectivo'),
('Tarjeta Debito'),
('Tarjeta Credito'),
('Transferencia'),
('Bitcoins')
;

INSERT INTO Operacion (id_cliente,id_empleado,id_medioPago,fecha_operacion,descuento_socio_total,fecha_estimada,fecha_entrega) VALUES (
  1,
  2,
  1,
  '2023-01-04 16:58:42',
  25.00,
  '2023-01-06 16:58:42',
  null
);

--- 04-01-2024 14:18:55
--- MS SQL
INSERT INTO Operacion (id_cliente,id_empleado,id_medioPago,fecha_operacion,descuento_socio_total,fecha_estimada,fecha_entrega) VALUES (
  2,
  1,
  3,
  '2023-01-03 16:58:42',
  25.00,
  '2023-01-05 16:58:42',
  '2023-01-04 16:58:42'
);

INSERT INTO TipoFormato(nombre_formato)
VALUES
('CD'),
('DVD'),
('BlueRay')
;

INSERT INTO TipoOperacion(nombre_operacion)
VALUES
('Venta'),
('Alquiler')
;

INSERT INTO Item(id_categoria, id_tipoformato, nombre_item, descripcion_item, precio_alquiler, precio_compra )
VALUES
(2, 2, 'El Rey Leon', 'x', 300, 580),
(1, 2, 'Anabelle', 'x', 350, 600),
(3, 1, 'Viejas Locas', 'x', 200, 300)
;

INSERT INTO OperacionDetalle(id_operacion, id_item, id_tipooperacion, cantidad, precio_unitario)
VALUES
(17, 1, 1, 1, 300),
(18, 2, 2, 2, 600)
;

INSERT INTO TiendaItemStock(id_tienda, id_item, cantidad, fecha_actualizacion, isingreso, cantidadTotal)
VALUES
(1, 3, 0, '2024-01-04 14:40:20', 1, 50),
(1, 4, 0, '2024-01-04 14:40:20', 1, 3)
;

/*ALTER TABLE TODASLASTABLAS
ADD created_at DATETIME DEFAULT GETDATE() NOT NULL;*/