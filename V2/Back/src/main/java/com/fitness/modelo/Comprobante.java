package com.fitness.modelo;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;
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
import javax.persistence.PrePersist;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotEmpty;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name="comprobantes")
public class Comprobante implements Serializable{
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "IdComprobante")
	private Long IdComprobante;
	
	
	@Column(name = "Fecha",nullable = false)
	@Temporal(TemporalType.DATE)
	private Date Fecha;
	
	@PrePersist
	public void prePersist() {
		Fecha=new Date();
	}
	
	public 	Comprobante(){
		items=new ArrayList<>();
	}
	
	@ManyToOne(optional=false,fetch = FetchType.EAGER)
	@JoinColumn(name = "IdUsuario", nullable = false)
	private Usuario Usuario;
	
	
	@Column(name = "Total",nullable = false)
	private float Total;
		

	@OneToMany(mappedBy = "Comprobante", fetch = FetchType.LAZY)
	private List<ItemComprobante> items;
	
	
	public Long getIdComprobante() {
		return IdComprobante;
	}
	public void setIdComprobante(Long idComprobante) {
		IdComprobante = idComprobante;
	}
	public Date getFecha() {
		return Fecha;
	}
	public void setFecha(Date fecha) {
		Fecha = fecha;
	}
	public Usuario getUsuario() {
		return Usuario;
	}
	public void setUsuario(Usuario usuario) {
		Usuario = usuario;
	}
	public float getTotal() {
		return Total;
	}
	public void setTotal(float total) {
		Total = total;
	}

	public List<ItemComprobante> getItems() {
		return items;
	}
	public void setItems(List<ItemComprobante> items) {
		this.items = items;
	}



	
	private static final long serialVersionUID = 1L;


}
