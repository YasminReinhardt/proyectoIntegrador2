-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:8889
-- Tiempo de generación: 13-06-2023 a las 13:54:11
-- Versión del servidor: 5.7.39
-- Versión de PHP: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `prog_practica1`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comentarios`
--
DROP SCHEMA prog_practica1;
CREATE SCHEMA prog_practica1
USE prog_practica1;

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `usuario` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `photo_url` varchar(255) DEFAULT NULL,
  `birthdate` date DEFAULT NULL,
  `dni` int(11) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `email`, `password`, `photo_url`, `birthdate`, `dni`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'lula', 'lula@gmail.com', '1234', NULL, '1990-01-01', 12345678, '2023-04-09 17:34:44', '2023-04-09 17:34:44', NULL),
(2, 'pepe', 'pepe@gmail', '1234', NULL, '1990-01-01', 12345678, '2023-04-09 17:34:44', '2023-04-09 17:34:44', NULL),
(3, 'juan', 'juan@gmail.com', '1234', NULL, '1990-01-01', 12345678, '2023-04-09 17:34:44', '2023-04-09 17:34:44', NULL),
(4, 'maria', 'maria@gmail.com', '1234', NULL, '1990-01-01', 12345678, '2023-04-09 17:34:44', '2023-04-09 17:34:44', NULL),
(5, 'lucas', 'lucas@gmail.com', '1234', NULL, '1990-01-01', 12345678, '2023-04-09 17:34:44', '2023-04-09 17:34:44', NULL),
(6, 'lula', 'lula@gmail.com', '1234', NULL, '1990-01-01', 12345678, '2023-04-10 18:46:27', '2023-04-10 18:46:27', NULL),
(7, 'pepe', 'pepe@gmail', '1234', NULL, '1990-01-01', 12345678, '2023-04-10 18:46:27', '2023-04-10 18:46:27', NULL),
(8, 'juan', 'juan@gmail.com', '1234', NULL, '1990-01-01', 12345678, '2023-04-10 18:46:27', '2023-04-10 18:46:27', NULL),
(9, 'maria', 'maria@gmail.com', '1234', NULL, '1990-01-01', 12345678, '2023-04-10 18:46:27', '2023-04-10 18:46:27', NULL),
(10, 'lucas', 'lucas@gmail.com', '1234', NULL, '1990-01-01', 12345678, '2023-04-10 18:46:27', '2023-04-10 18:46:27', NULL);

CREATE TABLE `productos` (
  `id` int(11) NOT NULL,
  `usuario_id` int(11) DEFAULT NULL,
  `nombre` varchar(255) NOT NULL,
  `descripcion` text,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `img_url` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id`, `usuario_id`, `nombre`, `descripcion`, `created_at`, `updated_at`, `deleted_at`, `img_url`) VALUES
(1, 1, 'Pelota', 'Pelota del Mundial', '2023-04-09 17:34:44', '2023-06-12 21:09:15', NULL, 'https://sporting.vtexassets.com/arquivos/ids/557628-1200-1200?v=637928169669670000&width=1200&height=1200&aspect=true'),
(2, 2, 'Camiseta', 'Camiseta de la Seleccion', '2023-04-09 17:34:44', '2023-06-12 21:00:57', NULL, 'https://pontelacamiseta.pe/wp-content/uploads/2022/09/descaxhryrga-300x300.jpg'),
(3, 3, 'Buzo', 'Buzo de la Seleccion', '2023-04-09 17:34:44', '2023-06-12 21:00:57', NULL, 'https://newsport.vtexassets.com/arquivos/ids/15794377-1200-auto?v=638145722577370000&width=1200&height=auto&aspect=true'),
(4, 4, 'Zapatillas', 'Zapatillas de la Seleccion', '2023-04-09 17:34:44', '2023-06-12 21:13:52', NULL, 'https://www.momentumoptimum.com/wp-content/uploads/2020/06/ADIDASPREDATOR19.4FXGBLANCO_2687308_0.jpg'),
(5, 5, 'Pantalon', 'Pantalon de la Seleccion', '2023-04-09 17:34:44', '2023-06-12 21:00:57', NULL, 'https://media.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/s/h/short-de-argentina-adidas-oficial-blanco-100020hk8071001-1.jpg'),
(6, 1, 'Pelota', 'Pelota del Mundial', '2023-04-09 17:34:44', '2023-06-12 21:09:15', NULL, 'https://sporting.vtexassets.com/arquivos/ids/557628-1200-1200?v=637928169669670000&width=1200&height=1200&aspect=true'),
(7, 2, 'Camiseta', 'Camiseta de la Seleccion', '2023-04-09 17:34:44', '2023-06-12 21:00:57', NULL, 'https://pontelacamiseta.pe/wp-content/uploads/2022/09/descaxhryrga-300x300.jpg'),
(8, 3, 'Buzo', 'Buzo de la Seleccion', '2023-04-09 17:34:44', '2023-06-12 21:00:57', NULL, 'https://newsport.vtexassets.com/arquivos/ids/15794377-1200-auto?v=638145722577370000&width=1200&height=auto&aspect=true'),
(9, 4, 'Zapatillas', 'Zapatillas de la Seleccion', '2023-04-09 17:34:44', '2023-06-12 21:13:52', NULL, 'https://www.momentumoptimum.com/wp-content/uploads/2020/06/ADIDASPREDATOR19.4FXGBLANCO_2687308_0.jpg'),
(10, 5, 'Pantalon', 'Pantalon de la Seleccion', '2023-04-09 17:34:44', '2023-06-12 21:00:57', NULL, 'https://media.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/s/h/short-de-argentina-adidas-oficial-blanco-100020hk8071001-1.jpg'),
(11, 1, 'Pelota', 'Pelota del Mundial', '2023-04-10 18:46:27', '2023-06-12 21:09:15', NULL, 'https://sporting.vtexassets.com/arquivos/ids/557628-1200-1200?v=637928169669670000&width=1200&height=1200&aspect=true'),
(12, 2, 'Camiseta', 'Camiseta de la Seleccion', '2023-04-10 18:46:27', '2023-06-12 21:00:57', NULL, 'https://pontelacamiseta.pe/wp-content/uploads/2022/09/descaxhryrga-300x300.jpg'),
(13, 3, 'Buzo', 'Buzo de la Seleccion', '2023-04-10 18:46:27', '2023-06-12 21:00:57', NULL, 'https://newsport.vtexassets.com/arquivos/ids/15794377-1200-auto?v=638145722577370000&width=1200&height=auto&aspect=true'),
(14, 4, 'Zapatillas', 'Zapatillas de la Seleccion', '2023-04-10 18:46:27', '2023-06-12 21:13:52', NULL, 'https://www.momentumoptimum.com/wp-content/uploads/2020/06/ADIDASPREDATOR19.4FXGBLANCO_2687308_0.jpg'),
(15, 5, 'Pantalon', 'Pantalon de la Seleccion', '2023-04-10 18:46:27', '2023-06-12 21:00:57', NULL, 'https://media.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/s/h/short-de-argentina-adidas-oficial-blanco-100020hk8071001-1.jpg'),
(16, 1, 'Pelota', 'Pelota del Mundial', '2023-04-10 18:46:27', '2023-06-12 21:09:15', NULL, 'https://sporting.vtexassets.com/arquivos/ids/557628-1200-1200?v=637928169669670000&width=1200&height=1200&aspect=true'),
(17, 2, 'Camiseta', 'Camiseta de la Seleccion', '2023-04-10 18:46:27', '2023-06-12 21:00:57', NULL, 'https://pontelacamiseta.pe/wp-content/uploads/2022/09/descaxhryrga-300x300.jpg'),
(18, 3, 'Buzo', 'Buzo de la Seleccion', '2023-04-10 18:46:27', '2023-06-12 21:00:57', NULL, 'https://newsport.vtexassets.com/arquivos/ids/15794377-1200-auto?v=638145722577370000&width=1200&height=auto&aspect=true'),
(19, 4, 'Zapatillas', 'Zapatillas de la Seleccion', '2023-04-10 18:46:27', '2023-06-12 21:13:52', NULL, 'https://www.momentumoptimum.com/wp-content/uploads/2020/06/ADIDASPREDATOR19.4FXGBLANCO_2687308_0.jpg'),
(20, 5, 'Pantalon', 'Pantalon de la Seleccion', '2023-04-10 18:46:27', '2023-06-12 21:00:57', NULL, 'https://media.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/s/h/short-de-argentina-adidas-oficial-blanco-100020hk8071001-1.jpg');

-- --------------------------------------------------------
CREATE TABLE `comentarios` (
  `id` int(11) NOT NULL,
  `productos_id` int(11) DEFAULT NULL,
  `usuario_id` int(11) DEFAULT NULL,
  `texto` text,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `comentarios`
--

INSERT INTO `comentarios` (`id`, `productos_id`, `usuario_id`, `texto`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 1, 1, 'Muy buena pelota', '2023-04-09 17:34:44', '2023-04-09 17:34:44', NULL),
(2, 2, 2, 'Muy buena camiseta', '2023-04-09 17:34:44', '2023-04-09 17:34:44', NULL),
(3, 3, 3, 'Muy buen buzo', '2023-04-09 17:34:44', '2023-04-09 17:34:44', NULL),
(4, 4, 4, 'Muy buenas zapatillas', '2023-04-09 17:34:44', '2023-04-09 17:34:44', NULL),
(5, 1, 1, 'Muy buena pelota', '2023-04-10 18:46:27', '2023-04-10 18:46:27', NULL),
(6, 2, 2, 'Muy buena camiseta', '2023-04-10 18:46:27', '2023-04-10 18:46:27', NULL),
(7, 3, 3, 'Muy buen buzo', '2023-04-10 18:46:27', '2023-04-10 18:46:27', NULL),
(8, 4, 4, 'Muy buenas zapatillas', '2023-04-10 18:46:27', '2023-04-10 18:46:27', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--



--
-- Estructura de tabla para la tabla `usuarios`
--


--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `comentarios`
--
ALTER TABLE `comentarios`
  ADD PRIMARY KEY (`id`),
  ADD KEY `productos_id` (`productos_id`),
  ADD KEY `usuario_id` (`usuario_id`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `usuario_id` (`usuario_id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `comentarios`
--
ALTER TABLE `comentarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `comentarios`
--
ALTER TABLE `comentarios`
  ADD CONSTRAINT `comentarios_ibfk_1` FOREIGN KEY (`productos_id`) REFERENCES `productos` (`id`),
  ADD CONSTRAINT `comentarios_ibfk_2` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`);

--
-- Filtros para la tabla `productos`
--
ALTER TABLE `productos`
  ADD CONSTRAINT `productos_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
