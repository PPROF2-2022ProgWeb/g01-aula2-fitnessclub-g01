package com.fitness.modelo;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;



@Entity
@Table(name = "roles")
@Data
public class Rol implements Serializable{

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "IdRol")
	private int IdRol;
	
	//Siempre debe comenzar con ROLE_
	@Column(name="nombre" , length = 20 , nullable = false, unique=true)
	private String Descripcion;
	public int getIdRol() {
		return IdRol;
	}
	public void setIdRol(int idRol) {
		IdRol = idRol;
	}
	public String getDescripcion() {
		return Descripcion;
	}
	public void setDescripcion(String descripcion) {
		Descripcion = descripcion;
	}
	
	private static final long serialVersionUID = 1L;
}
