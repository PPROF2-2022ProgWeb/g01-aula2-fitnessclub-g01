package com.fitness.modelo;

import java.io.Serializable;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;


@Entity
@Table(name="itemsComprobantes")
public class ItemComprobante implements Serializable{
	
	/*
	@Id
	@ManyToOne(optional=false,cascade=CascadeType.ALL)
    @JoinColumn(name="IdComprobante", nullable=false)
	@JsonBackReference
	private Comprobante Comprobante;
*/
	
	@Id
	@Column(name = "Renglon",nullable = false)
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int Renglon;
	
	

	//@JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })
	//@ManyToOne(fetch = FetchType.LAZY)
	//@JoinColumn(name = "IdProducto",nullable = false)
	
	@JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "IdProducto",nullable = false)
	private Producto Producto;

	
	@Column(name = "Cantidad",nullable = false)
	private int Cantidad;
	
	@Column(name = "PrecioUnitario",nullable = false)
	private float PrecioUnitario;
	
	/*
	public Comprobante getComprobante() {
		return Comprobante;
	}
	public void setComprobante(Comprobante comprobante) {
		Comprobante = comprobante;
	}*/
	
	public int getRenglon() {
		return Renglon;
	}
	public void setRenglon(int renglon) {
		Renglon = renglon;
	}
	public Producto getProducto() {
		return Producto;
	}
	public void setProducto(Producto producto) {
		Producto = producto;
	}
	public int getCantidad() {
		return Cantidad;
	}
	public void setCantidad(int cantidad) {
		Cantidad = cantidad;
	}
	public float getPrecioUnitario() {
		return PrecioUnitario;
	}
	public void setPrecioUnitario(float precioUnitario) {
		PrecioUnitario = precioUnitario;
	}
	
	private static final long serialVersionUID = 1L;
}
