import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { AuthService } from 'src/app/services/auth.service';
import { ModalService } from 'src/app/services/modal.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-dash-usuario',
  templateUrl: './dash-usuario.component.html',
  styleUrls: ['./dash-usuario.component.css']
})
export class DashUsuarioComponent implements OnInit {

  constructor(private usuarioService:UsuarioService, private modalService:ModalService, public authService:AuthService) { }

  usuarioSeleccionado:UsuarioModel;

  ngOnInit(): void {
  }

  abrirModal(usuario:UsuarioModel){
    console.log(usuario);
    this.usuarioService.getUsuario(usuario.idUsuario).subscribe(
      us=>{
        console.log(usuario);
        this.usuarioSeleccionado=us;
      }
    )
    this.modalService.abrirModal();
  }

  
}
