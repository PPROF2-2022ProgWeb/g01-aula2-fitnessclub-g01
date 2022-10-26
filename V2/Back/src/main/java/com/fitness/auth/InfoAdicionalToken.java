package com.fitness.auth;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.oauth2.common.DefaultOAuth2AccessToken;
import org.springframework.security.oauth2.common.OAuth2AccessToken;
import org.springframework.security.oauth2.provider.OAuth2Authentication;
import org.springframework.security.oauth2.provider.token.TokenEnhancer;
import org.springframework.stereotype.Component;

import com.fitness.modelo.Usuario;
import com.fitness.servicios.UsuarioService;

@Component
public class InfoAdicionalToken implements TokenEnhancer{

    @Autowired
    private UsuarioService usuarioService;
    
    @Override
    public OAuth2AccessToken enhance(OAuth2AccessToken accessToken, OAuth2Authentication authentication) {
        Usuario usuario=usuarioService.findByEmail(authentication.getName());
        Map<String, Object> info=new HashMap<>();
        info.put("info_adicional", "Hola que tal!" + authentication.getName());
        info.put("nombre", usuario.getNombre());
        info.put("apellido", usuario.getApellido());
        info.put("email", usuario.getEmail());
        info.put("idUsuario", usuario.getIdUsuario());
        ((DefaultOAuth2AccessToken)accessToken).setAdditionalInformation(info); 
        return accessToken;
    }

}