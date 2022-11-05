package com.fitness.servicios;

import java.util.List;

import com.fitness.modelo.Pais;
import com.fitness.modelo.Provincia;

public interface PaisService {
	public List<Pais> listaPaises();
	
	public Pais guardar(Pais pais);
	
	public void eliminar(Integer idPais);
	
	public Pais encontrarPais(Integer idPais);
	
	public List<Provincia> buscarProvinciasPorPais(int idPais);
}

