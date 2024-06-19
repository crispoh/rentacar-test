------------------------
--   Prueba tecnica   --
--   SOLICITUD N*2    --
------------------------

--Cristian Alvear

-- Creación de la base de datos
CREATE DATABASE VentasAutos;
USE VentasAutos;

-- Creación de la tabla Vendedor
CREATE TABLE Vendedor (
    IdVendedor INT PRIMARY KEY IDENTITY(1,1),
    Nombre NVARCHAR(100) NOT NULL
);
GO

-- Creación de la tabla MarcaAuto
CREATE TABLE MarcaAuto (
    IdMarca INT PRIMARY KEY IDENTITY(1,1),
    Nombre NVARCHAR(100) NOT NULL
);
GO

-- Creación de la tabla ModeloAuto
CREATE TABLE ModeloAuto (
    IdModelo INT PRIMARY KEY IDENTITY(1,1),
    IdMarca INT FOREIGN KEY REFERENCES MarcaAuto(IdMarca),
    Nombre NVARCHAR(100) NOT NULL,
    Precio DECIMAL(18,2) NOT NULL
);
GO

-- Creación de la tabla Solicitudes
CREATE TABLE Solicitudes (
    IdSolicitud INT PRIMARY KEY IDENTITY(1,1),
    IdVendedor INT FOREIGN KEY REFERENCES Vendedor(IdVendedor),
    IdModelo INT FOREIGN KEY REFERENCES ModeloAuto(IdModelo),
    FechaSolicitud DATETIME NOT NULL,
    PrecioVenta DECIMAL(18,2) NOT NULL
);
GO

--Agregamos los datos para Testear Solicitudes

-- Inserción de datos en Vendedor
INSERT INTO Vendedor (Nombre) VALUES 
('Juan Perez'), 
('Maria Lopez'), 
('Carlos Diaz'),
('Luis Fernandez'),
('Ana Maria'),
('Rosa Jimenez'),
('Miguel Torres'),
('Jose Martinez'),
('Laura Sanchez'),
('Sofia Gomez'),
('Cristian Alvear'); --Sin solicitudes
GO

-- Inserción de datos en MarcaAuto
INSERT INTO MarcaAuto (Nombre) VALUES 
('Toyota'), 
('Honda'), 
('Ford'),
('Chevrolet'),
('BMW'),
('Nissan');
GO

-- Inserción de datos en ModeloAuto
INSERT INTO ModeloAuto (IdMarca, Nombre, Precio) VALUES
(1, 'Corolla', 20000),
(1, 'Camry', 25000),
(2, 'Civic', 22000),
(2, 'Accord', 27000),
(3, 'Fiesta', 18000),
(3, 'Mustang', 30000),
(4, 'Spark', 15000),
(4, 'Malibu', 23000),
(5, 'X3', 45000),
(5, 'X5', 55000),
(6, 'Altima', 24000),
(6, 'Maxima', 28000); --Modelo sin solicitudes
GO

-- Inserción de datos en Solicitudes
INSERT INTO Solicitudes (IdVendedor, IdModelo, FechaSolicitud, PrecioVenta) VALUES
(1, 1, '2024-04-01', 20000),
(2, 2, '2024-04-15', 25000),
(1, 3, '2024-05-20', 22000),
(3, 4, '2024-05-25', 27000),
--Mes actual (test)
(2, 5, '2024-06-01', 18000),
(3, 6, '2024-06-05', 30000),
(4, 7, '2024-06-10', 15000),
(5, 8, '2024-06-15', 23000),
(6, 9, '2024-06-19', 45000),
--
(7, 10, '2023-06-25', 55000),
(8, 11, '2023-06-30', 24000),
(10, 1, '2023-07-10', 20000),
(1, 2, '2023-07-15', 25000),
(2, 3, '2023-07-20', 22000),
(3, 4, '2023-07-25', 27000),
(4, 5, '2023-08-01', 18000),
(5, 6, '2023-08-05', 30000),
(6, 7, '2023-08-10', 15000),
(7, 8, '2023-08-15', 23000),
(8, 9, '2023-08-20', 45000),
(9, 10, '2023-08-25', 55000),
(10, 11, '2023-08-30', 24000),
(2, 1, '2023-09-10', 20000),
(3, 2, '2023-09-15', 25000),
(4, 3, '2023-09-20', 22000),
(5, 4, '2023-09-25', 27000),
(6, 5, '2023-10-01', 18000),
(7, 6, '2023-10-05', 30000),
(8, 7, '2023-10-10', 15000),
(9, 8, '2023-10-15', 23000),
(10, 9, '2023-10-20', 45000),
(1, 10, '2023-10-25', 55000),
(2, 11, '2023-10-30', 24000),
(4, 1, '2023-11-10', 20000),
(5, 2, '2023-11-15', 25000),
(6, 3, '2023-11-20', 22000),
(7, 4, '2023-11-25', 27000),
(8, 5, '2023-12-01', 18000),
(9, 6, '2023-12-05', 30000),
(10, 7, '2023-12-10', 15000),
(1, 8, '2023-12-15', 23000),
(2, 9, '2023-12-20', 45000),
(3, 10, '2023-12-25', 55000),
(4, 11, '2023-12-30', 24000);
GO

-- Procedimientos almacenados

-- Procedimiento almacenado para obtener las 3 marcas más solicitadas
CREATE PROCEDURE ObtenerTop3Marcas
AS
BEGIN
    SELECT TOP 3 ma.Nombre AS Marca, COUNT(s.IdSolicitud) AS CantidadSolicitudes
    FROM Solicitudes s
    JOIN ModeloAuto mo ON s.IdModelo = mo.IdModelo
    JOIN MarcaAuto ma ON mo.IdMarca = ma.IdMarca
    GROUP BY ma.Nombre
    ORDER BY CantidadSolicitudes DESC;
END;
GO

-- Procedimiento almacenado para obtener solicitudes del mes actual
CREATE PROCEDURE ObtenerSolicitudesMesActual
AS
BEGIN
    SELECT * FROM Solicitudes
    WHERE MONTH(FechaSolicitud) = MONTH(GETDATE()) AND YEAR(FechaSolicitud) = YEAR(GETDATE());
END;
GO

-- Procedimiento almacenado para obtener el vendedor que menos solicitudes haya generado en los últimos 30 días
CREATE PROCEDURE ObtenerVendedorMenosSolicitudes
AS
BEGIN
    SELECT TOP 1 v.Nombre, COUNT(s.IdSolicitud) AS CantidadSolicitudes
    FROM Vendedor v
    LEFT JOIN Solicitudes s ON v.IdVendedor = s.IdVendedor
    WHERE s.FechaSolicitud >= DATEADD(DAY, -30, GETDATE()) OR s.FechaSolicitud IS NULL
    GROUP BY v.Nombre
    ORDER BY CantidadSolicitudes ASC;
END;
GO

-- Procedimiento almacenado para obtener modelos que no tengan solicitudes
CREATE PROCEDURE ObtenerModelosSinSolicitudes
AS
BEGIN
    SELECT mo.Nombre AS Modelo, ma.Nombre AS Marca
    FROM ModeloAuto mo
    LEFT JOIN Solicitudes s ON mo.IdModelo = s.IdModelo
    JOIN MarcaAuto ma ON mo.IdMarca = ma.IdMarca
    WHERE s.IdSolicitud IS NULL;
END;
GO

-- Procedimiento almacenado para obtener los 3 meses con más dinero en ventas
CREATE PROCEDURE ObtenerTop3MesesVentas
AS
BEGIN
    SELECT TOP 3 
        FORMAT(FechaSolicitud, 'MMMM yyyy') AS Mes, 
        SUM(PrecioVenta) AS TotalVentas
    FROM Solicitudes
    GROUP BY FORMAT(FechaSolicitud, 'MMMM yyyy')
    ORDER BY TotalVentas DESC;
END;
GO

--Ejecutar procedimientos almacenados

--Obtener las 3 marcas mas solicitadas, y la cantidad de solicitudes de cada una, ordenadas descendentemente
USE VentasAutos;
GO
EXEC ObtenerTop3Marcas;
GO

--Obtener solicitudes del mes actual
USE VentasAutos;
GO
EXEC ObtenerSolicitudesMesActual;
GO

--Obtener el vendedor que menos solicitudes haya generado en los últimos 30 días
USE VentasAutos;
GO
EXEC ObtenerVendedorMenosSolicitudes;
GO

--Obtener modelos que no tengan solicitudes 
USE VentasAutos;
GO
EXEC ObtenerModelosSinSolicitudes;
GO

--Obtener 3 meses con mas dinero en ventas
USE VentasAutos;
GO
EXEC ObtenerTop3MesesVentas;
GO

-- Borrar tablas (opcional)
--DROP TABLE IF EXISTS Solicitudes;
--DROP TABLE IF EXISTS ModeloAuto;
--DROP TABLE IF EXISTS MarcaAuto;
--DROP TABLE IF EXISTS Vendedor;

-- Borrar base de datos (opcional)
--USE master;
--DROP DATABASE IF EXISTS VentasAutos;
