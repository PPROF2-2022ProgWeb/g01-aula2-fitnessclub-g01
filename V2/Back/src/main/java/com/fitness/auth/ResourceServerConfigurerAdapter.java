package com.fitness.auth;

import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableResourceServer;


@Configuration
@EnableResourceServer
public class ResourceServerConfigurerAdapter extends org.springframework.security.oauth2.config.annotation.web.configuration.ResourceServerConfigurerAdapter{
	
	//Damos permisos
	@Override
	public void configure(HttpSecurity http) throws Exception {
		//Indicamos que esta pagina tiene acceso cualquier usuario
		http.authorizeRequests().antMatchers(HttpMethod.GET,"/api/**").permitAll()
		/*.antMatchers(HttpMethod.GET,"/api/clientes/{id}").hasAnyRole("USER","ADMIN")
		.antMatchers(HttpMethod.POST,"/api/clientes/upload").hasAnyRole("USER","ADMIN")
		.antMatchers(HttpMethod.POST,"/api/clientes").hasRole("ADMIN")
		.antMatchers("/api/clientes/**").hasRole("ADMIN")*/
		
		//Aca indicamos que las de mas paginas necesitan autenticacion
		.anyRequest().authenticated();
		//.and().cors().configurationSource(corsConfigurationSource());
	}
}
