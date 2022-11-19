INSERT INTO paises (nombre) VALUES ('Argentina');
INSERT INTO paises (nombre) VALUES ('Brasil');
INSERT INTO provincias (nombre,id_pais) VALUES ('Cordoba',1);
INSERT INTO provincias (nombre,id_pais) VALUES ('Santa Fe',1);
INSERT INTO localidades (nombre,id_provincia) VALUES ('Cordoba Capital',1);
INSERT INTO localidades (nombre,id_provincia) VALUES ('Villa de Maria',1);
INSERT INTO roles (nombre) VALUES ('ROLE_USER');
INSERT INTO roles (nombre) VALUES ('ROLE_ADMIN');
INSERT INTO rubros (nombre) VALUES ('Rubro A');
INSERT INTO rubros (nombre) VALUES ('Rubro B');
 
INSERT INTO productos (descripcion,estado,imagen,precio_unitario,servicio,stock,id_disciplina,id_marca,id_rubro) VALUES ('Producto 1',true,'',56.3,true,3,1,1,1);
INSERT INTO productos (descripcion,estado,imagen,precio_unitario,servicio,stock,id_disciplina,id_marca,id_rubro) VALUES ('Producto 2',true,'',24.56,true,0,1,1,1);

INSERT INTO usuarios (apellido,dni,direccion,email,imagen,nombre,password, estado,id_localidad,id_rol) 
VALUES ('Binaghi',28775160,'','gimenabinaghi@gmail.com','','Gimena','$2a$10$wuOQV0qZX3FjdDG6QOiI5.9IiycUJvB76KBV3JJijUWkaUGTB.1km',1,1,2);

--INSERT INTO usuarios (apellido,dni,direccion,email,imagen,nombre,password, estado,id_localidad,id_rol)  
--VALUES ('Bordarampe',7955237,'','jlbordarampe@gmail.com','','Jorge Luis','$2a$10$wuOQV0qZX3FjdDG6QOiI5.9IiycUJvB76KBV3JJijUWkaUGTB.1km',1,1,1);