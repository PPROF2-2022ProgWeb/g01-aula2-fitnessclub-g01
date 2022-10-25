package com.fitness.servicios;

import java.util.ArrayList;

import java.util.List;
import java.util.stream.Collectors;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;

import com.fitness.modelo.Rol;
import com.fitness.modelo.Usuario;
import com.fitness.repositorios.UsuarioRepository;

@Service
public class UsuarioServiceImpl implements UserDetailsService,UsuarioService {
	
	private Logger logger=LoggerFactory.getLogger(UsuarioServiceImpl.class);
	
	@Autowired
    private UsuarioRepository usuarioRepository;
	
	@Override
	@Transactional(readOnly=true)
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
		Usuario usuario=usuarioRepository.findByEmail(email);
		
		if(usuario==null) {
			logger.error("Error en el login; no existe el usuario con el email'" + email + "' en el sistema!");
			throw new UsernameNotFoundException("Error en el login; no existe el usuario con el mail'" + email + "' en el sistema!");
		}
		List<Rol> roles=new ArrayList<>();
		roles.add(usuario.getRol());
		List<GrantedAuthority> autorizaciones=roles
				.stream()
				.map(rol->new SimpleGrantedAuthority(rol.getDescripcion()))
				.peek(authority->logger.info("Rol :" + authority.getAuthority()))
				.collect(Collectors.toList());
		
		return new User(usuario.getEmail(), usuario.getPassword(),usuario.getEstado(),true,true,true,autorizaciones);
	}

	@Override
	public List<Usuario> listarUsuarios() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Usuario guardar(Usuario usuario) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void eliminar(Integer idUsuario) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public Usuario encontrarUsuario(Integer idUsuario) {
		// TODO Auto-generated method stub
		return null;
	}
	
	/*
	@Override
	@Transactional(readOnly = true)
	public List<Usuario> listarUsuarios() {
	    return (List<Usuario>) usuarioRepository.findAll();
	}

	@Override
	@Transactional
	public Usuario guardar(Usuario usuario) {
		return usuarioRepository.save(usuario);
	}

	@Override
	@Transactional
	public void eliminar(Integer idUsuario) {
		usuarioRepository.deleteById(idUsuario);	
	}

	@Override
	@Transactional(readOnly = true)
	public Usuario encontrarUsuario(Integer idUsuario) {
		// TODO Auto-generated method stub
		return usuarioRepository.findById(idUsuario).orElse(null);
	}*/
}
