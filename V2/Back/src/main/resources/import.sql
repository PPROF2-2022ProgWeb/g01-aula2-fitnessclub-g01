INSERT INTO roles (nombre) VALUES ('ROLE_USER');
INSERT INTO roles (nombre) VALUES ('ROLE_ADMIN');


INSERT INTO paises (descripcion) VALUES ('Argentina');

INSERT INTO paises (descripcion) VALUES ('Brasil');

INSERT INTO provincias (descripcion, id_pais) VALUES ('Cordoba', 1);
INSERT INTO provincias (descripcion, id_pais) VALUES ('Santa Fe', 1);

INSERT INTO localidades (descripcion, id_provincia) VALUES ('Villa de Maria', 1);


INSERT INTO usuarios (apellido, dni, direccion, email, estado, nombre, password, id_localidad, id_rol) VALUES ('Bordarampe', 7955237, 'Sarmiento 793', 'jlbordarampe@gmail.com', 1, 'Jorge Luis', '$2a$10$IsVD970M59msjRbtrlHoE.iomNUCsRBJaWvh7uBIxVTcsovE.hV8.', 1, 1);