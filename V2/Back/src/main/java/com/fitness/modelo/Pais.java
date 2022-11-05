package com.fitness.modelo;



import javax.persistence.Column;
import javax.persistence.Entity;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import javax.persistence.Table;



@Entity
@Table(name = "paises")
public class Pais{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "IdPais")
	private int IdPais;	
	
	@Column(name="Descripcion" , length = 45, nullable = false)
	private String Descripcion;

   //@JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })
   // @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.PERSIST)
   /*@JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })
   @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
   @JoinColumn(name = "IdPais")
	private List<Provincia> provincias;
	
	
    public List<Provincia> getProvincias() {
        return provincias;
    }

    public void setProvincias(List<Provincia> provincias) {
        this.provincias = provincias;
    }
*/
    public int getIdPais() {
		return IdPais;
	}

	public void setIdPais(int idPais) {
		IdPais = idPais;
	}

	public String getDescripcion() {
		return Descripcion;
	}

	public void setDescripcion(String descripcion) {
		Descripcion = descripcion;
	}
	
	
}
