import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Fitness-App';
  constructor(public authService:AuthService){
  
  }

  consultarRol():boolean{
    

    if(this.authService.usuario.idUsuario==undefined){

      return false;
    }else{
      
      //if(this.authService.usuario.rol.nombre==='ROLE_ADMIN'){
        
        if(this.authService.hasRole('ROLE_ADMIN')){
       return true;
      }else{
        return false;
      }
 
    }

    
  }
}

