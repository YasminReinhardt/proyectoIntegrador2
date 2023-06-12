
CREATE TABLE usuarios (
  id INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  usuario VARCHAR(55) NOT NULL UNIQUE,
  email VARCHAR(55) NOT NULL UNIQUE,
  password VARCHAR(55) NOT NULL,
  photo VARCHAR(55),
  birthdate DATE NOT NULL,
  dni INT NOT NULL UNIQUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  deleted_at TIMESTAMP NULL DEFAULT NULL
 );

CREATE TABLE productos (
  id INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  usuario_id INT NOT NULL,
  nombre VARCHAR(55) NOT NULL,
  descripcion TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  deleted_at TIMESTAMP NULL DEFAULT NULL,
  FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);

CREATE TABLE comentarios (
  id INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  productos_id INT,
  usuario_id INT,
  texto TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  deleted_at TIMESTAMP NULL DEFAULT NULL,
  FOREIGN KEY (productos_id) REFERENCES productos(id),
  FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);

insert into usuarios (usuario, email, password, dni, birthdate)
    values('lula', 'lula@gmail.com', '1234', 12345678, '1990-01-01');

insert into usuarios (usuario, email, password, dni, birthdate)
    values('pepe', 'pepe@gmail', '1234', 12345678, '1990-01-01');

insert into usuarios (usuario, email, password, dni, birthdate)
    values('juan', 'juan@gmail.com', '1234', 12345678, '1990-01-01');

insert into usuarios (usuario, email, password, dni, birthdate)
    values('maria', 'maria@gmail.com', '1234', 12345678, '1990-01-01');

insert into usuarios (usuario, email, password, dni, birthdate)
    values('lucas', 'lucas@gmail.com', '1234', 12345678, '1990-01-01');

insert into productos (usuario_id, nombre, descripcion)
    values(1, 'Pelota', 'Pelota del Mundial');

insert into productos (usuario_id, nombre, descripcion)
    values(2, 'Camiseta', 'Camiseta de la Seleccion');

insert into productos (usuario_id, nombre, descripcion)
    values(3, 'Buzo', 'Buzo de la Seleccion');

insert into productos (usuario_id, nombre, descripcion)
    values(4, 'Zapatillas', 'Zapatillas de la Seleccion');

insert into productos (usuario_id, nombre, descripcion)
    values(5, 'Pantalon', 'Pantalon de la Seleccion');

insert into productos (usuario_id, nombre, descripcion)
    values(1, 'Pelota', 'Pelota del Mundial');

insert into productos (usuario_id, nombre, descripcion)
    values(2, 'Camiseta', 'Camiseta de la Seleccion');

insert into productos (usuario_id, nombre, descripcion)
    values(3, 'Buzo', 'Buzo de la Seleccion');

insert into productos (usuario_id, nombre, descripcion)
    values(4, 'Zapatillas', 'Zapatillas de la Seleccion');

insert into productos (usuario_id, nombre, descripcion)
    values(5, 'Pantalon', 'Pantalon de la Seleccion');

insert into comentarios (productos_id, usuario_id, texto)
    values(1, 1, 'Muy buena pelota');

insert into comentarios (productos_id, usuario_id, texto)
    values(2, 2, 'Muy buena camiseta');

insert into comentarios (productos_id, usuario_id, texto)
    values(3, 3, 'Muy buen buzo');

insert into comentarios (productos_id, usuario_id, texto)
    values(4, 4, 'Muy buenas zapatillas');