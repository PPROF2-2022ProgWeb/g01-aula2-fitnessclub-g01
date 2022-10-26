package com.fitness.modelo;

import java.io.Serializable;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;


@Entity
@Table(name = "usuarios")
public class Usuario implements Serializable{

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "IdUsuario")
	private int IdUsuario;
	@Column(name="Nombre" , length = 45, nullable = false)
	private String Nombre;
	@Column(name="apellido" , length = 45, nullable = false)
	private String Apellido;
	
	@Column(name="email" , length = 45, nullable = false, unique=true)
	private String Email;
	@Column(name="Direccion" , length = 70, nullable = false)
	private String Direccion;
	@ManyToOne(optional=false,fetch = FetchType.LAZY)
	@JoinColumn(name = "IdLocalidad")
	@JsonIgnoreProperties({"hibernateLazyInitializer","handler"})
	private Localidad Localidad;
	
	private int DNI;
	@Column(name="Password" , length = 60, nullable = false)
	private String Password;
	
	@ManyToOne(optional=false,fetch = FetchType.LAZY)
	@JoinColumn(name = "IdRol")
	@JsonIgnoreProperties({"hibernateLazyInitializer","handler"})
	private Rol Rol;
	
	
	@Column(name="Estado" , nullable = false)
	private Boolean Estado;

	
	
	public int getIdUsuario() {
		return IdUsuario;
	}



	public void setIdUsuario(int idUsuario) {
		IdUsuario = idUsuario;
	}



	public String getNombre() {
		return Nombre;
	}



	public void setNombre(String nombre) {
		Nombre = nombre;
	}



	public String getApellido() {
		return Apellido;
	}



	public void setApellido(String apellido) {
		Apellido = apellido;
	}



	public String getEmail() {
		return Email;
	}



	public void setEmail(String email) {
		Email = email;
	}



	public String getDireccion() {
		return Direccion;
	}



	public void setDireccion(String direccion) {
		Direccion = direccion;
	}



	public Localidad getLocalidad() {
		return Localidad;
	}



	public void setLocalidad(Localidad localidad) {
		Localidad = localidad;
	}



	public int getDNI() {
		return DNI;
	}



	public void setDNI(int dNI) {
		DNI = dNI;
	}



	public String getPassword() {
		return Password;
	}



	public void setPassword(String password) {
		Password = password;
	}



	public Rol getRol() {
		return Rol;
	}



	public void setRol(Rol rol) {
		Rol = rol;
	}



	public Boolean getEstado() {
		return Estado;
	}



	public void setEstado(Boolean estado) {
		Estado = estado;
	}



	private static final long serialVersionUID = 1L;	
}
