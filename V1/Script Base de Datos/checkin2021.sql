-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 23-11-2021 a las 01:46:06
-- Versión del servidor: 10.4.21-MariaDB
-- Versión de PHP: 8.0.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `checkin2021`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `persona`
--

CREATE TABLE `persona` (
  `Nombre` varchar(45) NOT NULL,
  `Apellido` varchar(45) NOT NULL,
  `TipoDocumento` varchar(45) NOT NULL,
  `Documento` int(15) NOT NULL,
  `FechaNacimiento` varchar(10) NOT NULL,
  `Email` varchar(45) NOT NULL,
  `Direccion` varchar(45) NOT NULL,
  `Localidad` varchar(45) NOT NULL,
  `Provincia` varchar(45) NOT NULL,
  `Pais` varchar(45) NOT NULL,
  `Contraseña` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `persona`
--

INSERT INTO `persona` (`Nombre`, `Apellido`, `TipoDocumento`, `Documento`, `FechaNacimiento`, `Email`, `Direccion`, `Localidad`, `Provincia`, `Pais`, `Contraseña`) VALUES
('DIEGO FEDERICO', 'MOYANO DUARTE', 'DNI', 33162161, '19/07/1987', 'diegomoyano_19@hotmail.com', 'Dr Angel Roffo 2147', 'Córdoba', 'Córdoba', 'Argentina', 'DIEGOMOYANO1987');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `turnos`
--

CREATE TABLE `turnos` (
  `Sedes` varchar(45) NOT NULL,
  `Profesor` varchar(45) NOT NULL,
  `Actividad` varchar(45) NOT NULL,
  `Horario` varchar(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `turnos`
--

INSERT INTO `turnos` (`Sedes`, `Profesor`, `Actividad`, `Horario`) VALUES
('Sede 1', 'Juan Perez', 'Aerobox', '19hs');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `Email` varchar(45) NOT NULL,
  `Password` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
