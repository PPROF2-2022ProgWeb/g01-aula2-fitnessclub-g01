package com.fitness.modelo;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

import org.springframework.lang.Nullable;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;


@Entity
@Table(name="usuarios")
public class Usuario implements Serializable{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "IdUsuario")
	private Long IdUsuario;
	
	@Column(name = "Nombre",nullable = false, length = 45)
	private String Nombre;
	
	@Column(name = "Apellido",nullable = false, length = 45)
	private String Apellido;
	
	@Column(name = "DNI",nullable=false)
	private int DNI;
	
	@Column(name = "Email",nullable = false, length = 50, unique = true)
	private String Email;
	
	@Column(name = "Direccion", length = 60)
	private String Direccion;
	
	@ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "IdLocalidad", nullable = false)
	@JsonIgnoreProperties(value={"hibernateLazyInitializer", "handler"})
	private Localidad Localidad;
		
	@Column(name = "Password",nullable = false, length = 80)
	private String Password;
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "IdRol", nullable = false)
	@JsonIgnoreProperties(value={"hibernateLazyInitializer", "handler"})
	private Rol Rol;
	
	
	@Column(name = "Imagen")
	private String Imagen;
	
	@Column(name = "estado",nullable = false)
	private boolean estado;
	
	/*
	@JsonIgnoreProperties(value={"Usuario", "hibernateLazyInitializer", "handler"}, allowSetters=true)
	@OneToMany(fetch = FetchType.LAZY, mappedBy = "Usuario", cascade = CascadeType.ALL)
	private List<Comprobante> Comprobantes;
	*/
	
	public Long getIdUsuario() {
		return IdUsuario;
	}
	public void setIdUsuario(Long idUsuario) {
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
	
	public int getDNI() {
		return DNI;
	}
	public void setDNI(int dNI) {
		DNI = dNI;
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
	public String getImagen() {
		return Imagen;
	}
	public void setImagen(String imagen) {
		Imagen = imagen;
	}
	public boolean getEstado() {
		return estado;
	}
	public void setEstado(boolean estado) {
		this.estado = estado;
	}
/*
	@JsonIgnoreProperties(value={"Usuario", "hibernateLazyInitializer", "handler"}, allowSetters=true)
	@OneToMany(fetch = FetchType.EAGER, mappedBy = "Usuario", cascade = CascadeType.ALL)
	private List<Comprobante> Comprobantes;

	

	public Usuario() {
		this.Comprobantes = new ArrayList<>();
	}
	
	
	public List<Comprobante> getComprobantes() {
		return Comprobantes;
	}

	public void setComprobantes(List<Comprobante> comprobantes) {
		Comprobantes = comprobantes;
	}
*/

	private static final long serialVersionUID = 1L;
}
