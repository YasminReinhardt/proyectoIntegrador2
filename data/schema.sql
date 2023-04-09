CREATE TABLE usuarios (
  id INT PRIMARY KEY AUTO_INCREMENT,
  usuario VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  photo_url VARCHAR(255),
  birthdate DATE,
  dni INT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  deleted_at TIMESTAMP NULL DEFAULT NULL
);

CREATE TABLE productos (
  id INT PRIMARY KEY AUTO_INCREMENT,
  usuario_id INT,
  nombre VARCHAR(255) NOT NULL,
  descripcion TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  deleted_at TIMESTAMP NULL DEFAULT NULL,
  FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);

CREATE TABLE comentarios (
  id INT PRIMARY KEY AUTO_INCREMENT,
  productos_id INT,
  usuario_id INT,
  texto TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  deleted_at TIMESTAMP NULL DEFAULT NULL,
  FOREIGN KEY (productos_id) REFERENCES productos(id),
  FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);

-- Users
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

-- Productos
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


-- Comentarios
insert into comentarios (productos_id, usuario_id, texto)
    values(1, 1, 'Muy buena pelota');

insert into comentarios (productos_id, usuario_id, texto)
    values(2, 2, 'Muy buena camiseta');

insert into comentarios (productos_id, usuario_id, texto)
    values(3, 3, 'Muy buen buzo');

insert into comentarios (productos_id, usuario_id, texto)
    values(4, 4, 'Muy buenas zapatillas');