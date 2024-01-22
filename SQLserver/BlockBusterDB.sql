CREATE DATABASE BlockBuster;

CREATE TABLE Genero(
  id_genero INT NOT NULL PRIMARY KEY IDENTITY (1, 1),
  nombre_genero varchar(50)
);

CREATE TABLE Categoria(
  id_categoria INT NOT NULL PRIMARY KEY IDENTITY (1, 1),
  nombre_categoria varchar(50),
  id_genero INT,
  FOREIGN KEY (id_genero) REFERENCES Genero (id_genero)
);

CREATE TABLE Pais(
  id_pais INT NOT NULL PRIMARY KEY IDENTITY (1, 1),
  nombre_pais varchar(50),
);

CREATE TABLE Provincia(
  id_provincia INT NOT NULL PRIMARY KEY IDENTITY (1, 1),
  nombre_provincia varchar(50),
  id_pais INT FOREIGN KEY (id_pais) REFERENCES Pais (id_pais)
);

CREATE TABLE Direccion(
  id_direccion INT NOT NULL PRIMARY KEY IDENTITY (1, 1),
  id_provincia INT,
  calle varchar(50),
  numero INT,
  cod_postal INT,
  FOREIGN KEY (id_provincia) REFERENCES Provincia (id_provincia)
);

CREATE TABLE Tienda(
  id_tienda INT NOT NULL PRIMARY KEY IDENTITY (1, 1),
  id_direccion INT,
  nombre_tienda varchar(50),
  FOREIGN KEY (id_direccion) REFERENCES Direccion (id_direccion)
);

CREATE TABLE Empleado(
  id_empleado INT NOT NULL PRIMARY KEY IDENTITY (1, 1),
  id_tienda INT,
  nombre varchar(50),
  apellido varchar(50),
  legajo varchar(50),
  FOREIGN KEY (id_tienda) REFERENCES Tienda (id_tienda)
);

CREATE TABLE Cliente(
  id_cliente INT NOT NULL PRIMARY KEY IDENTITY (1, 1),
  id_direccion INT ,
  nombre_cliente varchar(50),
  apellido_cliente varchar(50),
  fecha_nacimiento date NULL,
  mail_cliente varchar(50) NULL,
  telefono_cliente INT NULL,
  dni_cliente INT NULL,
  isSocio BIT,
  FOREIGN KEY (id_direccion) REFERENCES Direccion (id_direccion)
);

CREATE TABLE MedioPago(
  id_medioPago INT NOT NULL PRIMARY KEY IDENTITY (1, 1),
  nombre_medio varchar(50),
);

CREATE TABLE Operacion(
  id_operacion INT NOT NULL PRIMARY KEY IDENTITY (1, 1),
  id_socio INT,
  id_empleado INT,
  id_medioPago INT,
  fecha_operacion datetime,
  descuento_socio_total FLOAT,
  fecha_estimada datetime,
  fecha_entrega datetime,
  FOREIGN KEY (id_socio) REFERENCES Socio (id_socio),
  FOREIGN KEY (id_empleado) REFERENCES Empleado (id_empleado),
  FOREIGN KEY (id_medioPago) REFERENCES MedioPago (id_mediopago),
);

CREATE TABLE TipoFormato(
  id_tipoFormato INT NOT NULL PRIMARY KEY IDENTITY (1, 1),
  nombre_formato varchar(50),
);

CREATE TABLE TipoOperacion(
  id_tipoOperacion INT NOT NULL PRIMARY KEY IDENTITY (1, 1),
  nombre_operacion varchar(50),
);

CREATE TABLE Item(
  id_item INT NOT NULL PRIMARY KEY IDENTITY (1, 1),
  id_categoria INT,
  id_tipoFormato INT,
  nombre_item varchar(50),
  descripcion_item text,
  precio_alquiler float,
  precio_compra float,
  FOREIGN KEY (id_categoria) REFERENCES Categoria (id_categoria),
  FOREIGN KEY (id_tipoformato) REFERENCES TipoFormato (id_tipoFormato),
);

CREATE TABLE OperacionDetalle(
  id_operacionDetalle INT NOT NULL PRIMARY KEY IDENTITY (1, 1),
  id_operacion INT,
  id_item INT,
  id_tipoOperacion INT,
  cantidad INT,
  precio_unitario FLOAT,
  FOREIGN KEY (id_operacion) REFERENCES Operacion (id_operacion),
  FOREIGN KEY (id_tipoOperacion) REFERENCES TipoOperacion (id_tipoOperacion),
);

CREATE TABLE TiendaItemStock(
  id_tiendaItemStock INT NOT NULL PRIMARY KEY IDENTITY (1, 1),
  id_tienda INT,
  id_item INT,
  cantidad INT,
  fecha_actualizacion datetime,
  isIngreso bit,
  cantidadTotal bigint,
  FOREIGN KEY (id_tienda) REFERENCES Tienda (id_tienda),
  FOREIGN KEY (id_item) REFERENCES Item (id_item),
);