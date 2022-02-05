CREATE DATABASE GestorRecursoHumanoDB;

USE GestorRecursoHumanoDB;

CREATE TABLE `GestorRecursoHumanoDB`.`Tercero` ( 
  `tipo_id` VARCHAR(25) NOT NULL, 
  `idTercero` VARCHAR(15) NOT NULL, 
  `primer_nombre` VARCHAR(25) NOT NULL, 
  `segundo_nombre` VARCHAR(25), 
  `primer_apellido` VARCHAR(25) NOT NULL, 
  `segundo_apellido` VARCHAR(25) NOT NULL, 
  `sexo` VARCHAR(8) NOT NULL, 
  `fecha_nacimiento` DATE NOT NULL, 
  `nacionalidad` VARCHAR(25) NOT NULL, 
  `telefono_movil` VARCHAR(15) NOT NULL, 
  `telefono_dos` VARCHAR(15), 
  `nombre_emergencia` VARCHAR(30), 
  `telefono_emergencia` VARCHAR(15), 
  `correo_tercero` VARCHAR(65) NOT NULL, 
  `direccion` VARCHAR(65) NOT NULL, 
  `ciudad` VARCHAR(30) NOT NULL, 
  `estado_civil` VARCHAR(13) NOT NULL, 
  `hijos` INT NOT NULL, 
  `cohabitantes` VARCHAR(90) NOT NULL, 
  `grupo_sangre` VARCHAR(3) NOT NULL, 
  `estado_salud` VARCHAR(100) NOT NULL, 
  `hoja_vida` TEXT NOT NULL, 
  PRIMARY KEY (`idTercero`(15))
); 


CREATE TABLE `GestorRecursoHumanoDB`.`PerfilAcademico` ( 
  `idPerfilAcademico` INT NOT NULL AUTO_INCREMENT , 
  `nombre_inst` VARCHAR(100) NOT NULL , 
  `nivel_academico` VARCHAR(20) NOT NULL , 
  `titulacion` VARCHAR(60) NOT NULL , 
  `soporte_academico` TEXT NOT NULL , 
  PRIMARY KEY (`idPerfilAcademico`)
);
CREATE TABLE `GestorRecursoHumanoDB`.`Tercero_PA` ( 
  `idTercero_PA` INT NOT NULL AUTO_INCREMENT , 
  `idTercero` VARCHAR(15) NOT NULL , 
  `idPerfilAcademico` INT NOT NULL , 
  PRIMARY KEY (`idTercero_PA`)
);
ALTER TABLE `Tercero_PA` ADD CONSTRAINT `FK_idTercero` FOREIGN KEY (`idTercero`) 
REFERENCES `Tercero`(`idTercero`) ON DELETE CASCADE ON UPDATE CASCADE; 
ALTER TABLE `Tercero_PA` ADD CONSTRAINT `FK_idPA` FOREIGN KEY (`idPerfilAcademico`)
REFERENCES `PerfilAcademico`(`idPerfilAcademico`) ON DELETE RESTRICT ON UPDATE RESTRICT;


CREATE TABLE `GestorRecursoHumanoDB`.`PerfilProfesional` ( 
  `idPerfilProfesional` INT NOT NULL AUTO_INCREMENT , 
  `tipo_entidad` VARCHAR(15) NOT NULL , 
  `nombre_entidad` VARCHAR(60) NOT NULL , 
  `cargo` VARCHAR(60) NOT NULL , 
  `tiempo` VARCHAR(25) NOT NULL , 
  `certificado_laboral` TEXT NOT NULL , 
  `soporte_recon` TEXT NULL , 
  PRIMARY KEY (`idPerfilProfesional`)
);
CREATE TABLE `GestorRecursoHumanoDB`.`Tercero_PP` ( 
  `idTercero_PP` INT NOT NULL AUTO_INCREMENT , 
  `idTercero-PP` VARCHAR(15) NOT NULL , 
  `idPerfilProfesional` INT NOT NULL , 
  PRIMARY KEY (`idTercero_PP`)
);
ALTER TABLE `Tercero_PP` ADD CONSTRAINT `FK_idTercero-PP` FOREIGN KEY (`idTercero-PP`) 
REFERENCES `Tercero`(`idTercero`) ON DELETE RESTRICT ON UPDATE RESTRICT; 
ALTER TABLE `Tercero_PP` ADD CONSTRAINT `FK_idPP` FOREIGN KEY (`idPerfilProfesional`)
REFERENCES `PerfilProfesional`(`idPerfilProfesional`) ON DELETE RESTRICT ON UPDATE RESTRICT;


CREATE TABLE `GestorRecursoHumanoDB`.`ExperienciaConCentro` ( 
  `idExperienciaCentro` INT NOT NULL AUTO_INCREMENT , 
  `tipo_contrato` VARCHAR(30) NULL , 
  `duracion` VARCHAR(20) NULL , 
  `numero_convenio` VARCHAR(10) NULL , 
  `puntuacion` VARCHAR(15) NULL , 
  `escuela` VARCHAR(30) NULL , 
  `centro` VARCHAR(52) NULL , 
  `unidad` VARCHAR(30) NULL , 
  `tercero_ECC` VARCHAR(15) NOT NULL , 
  PRIMARY KEY (`idExperienciaCentro`)
);
ALTER TABLE `ExperienciaConCentro` ADD CONSTRAINT `tercero_ECC` FOREIGN KEY (`idTercero`) 
REFERENCES `Tercero`(`idTercero`) ON DELETE CASCADE ON UPDATE CASCADE; 


CREATE TABLE `GestorRecursoHumanoDB`.`Talento` ( 
  `idTalento` INT NOT NULL AUTO_INCREMENT , 
  `nombre_talento` VARCHAR(40) NULL , 
  `tiempo_realizarlo` VARCHAR(25) NULL , 
  `ejercicio` VARCHAR(60) NULL , 
  `soporte_talento` TEXT NULL , 
  PRIMARY KEY (`idTalento`)
);
CREATE TABLE `GestorRecursoHumanoDB`.`Tercero_T` ( 
  `idTercero_T` INT NOT NULL AUTO_INCREMENT , 
  `idTercero-T` INT NOT NULL , 
  `idTalento` INT NOT NULL , 
  PRIMARY KEY (`idTercero_T`)
);
ALTER TABLE `Tercero_T` ADD CONSTRAINT `FK_idTercero-T` FOREIGN KEY (`idTercero-T`) 
REFERENCES `Tercero`(`idTercero`) ON DELETE CASCADE ON UPDATE CASCADE; 
ALTER TABLE `Tercero_T` ADD CONSTRAINT `FK_idTalento` FOREIGN KEY (`idTalento`) 
REFERENCES `Talento`(`idTalento`) ON DELETE RESTRICT ON UPDATE RESTRICT; 


CREATE TABLE `GestorRecursoHumanoDB`.`Usuarios` ( 
  `idUsuario` INT NOT NULL AUTO_INCREMENT , 
  `nombre` VARCHAR(40) NOT NULL , 
  `password` VARCHAR(225) NOT NULL , 
  `correo` VARCHAR(65) NOT NULL , 
  `rol` VARCHAR(15) NOT NULL , 
  PRIMARY KEY (`idUsuario`)
); 


CREATE TABLE `GestorRecursoHumanoDB`.`Publicaciones` ( 
  `idPublicacion` INT NOT NULL AUTO_INCREMENT , 
  `tipo` VARCHAR(30) NULL , 
  `titulo` VARCHAR(60) NULL , 
  `tema` VARCHAR(50) NULL , 
  `fecha_publicacion` DATE NULL , 
  `idPerfilAcademico` INT NOT NULL ,
  `idPerfilProfesional` INT NOT NULL ,
  PRIMARY KEY (`idPublicacion`)
);
ALTER TABLE `Publicaciones` ADD CONSTRAINT `FK_PA` FOREIGN KEY (`idPerfilAcademico`) 
REFERENCES `PerfilAcademico`(`idPerfilAcademico`) ON DELETE CASCADE ON UPDATE CASCADE; 
ALTER TABLE `Publicaciones` ADD CONSTRAINT `FK_PP` FOREIGN KEY (`idPerfilProfesional`) 
REFERENCES `PerfilProfesional`(`idPerfilProfesional`) ON DELETE CASCADE ON UPDATE CASCADE; 