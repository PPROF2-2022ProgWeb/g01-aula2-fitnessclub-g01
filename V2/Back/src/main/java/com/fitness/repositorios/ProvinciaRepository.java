package com.fitness.repositorios;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.fitness.modelo.Provincia;
import com.fitness.modelo.Usuario;

public interface ProvinciaRepository extends JpaRepository<Provincia, Integer>{
    
   @Query("select p from Provincia p where p.Pais.IdPais=?1")
   public List<Provincia> buscarProvinciasPorPais(int idPais);

}
