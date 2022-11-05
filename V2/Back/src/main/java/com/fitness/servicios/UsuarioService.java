package com.fitness.servicios;

import java.util.List;

import com.fitness.modelo.Usuario;


public interface UsuarioService {
	public List<Usuario> listarUsuarios();
	
	public Usuario guardar(Usuario usuario);
	
	public void eliminar(Integer idUsuario);
	
	public Usuario buscarPorId(Integer idUsuario);
	
	public Usuario buscarPorEmail(String email);

}

