import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComprobanteModel } from 'src/app/models/comprobante.model';
import { ItemComprobanteModel } from 'src/app/models/itemComprobante.model';
import { AuthService } from 'src/app/services/auth.service';
import { ComprobanteService } from 'src/app/services/comprobante.service';
import { Modal2Service } from 'src/app/services/modal2.service';

@Component({
  selector: 'app-comprobantes-user',
  templateUrl: './comprobantes-user.component.html',
  styleUrls: ['./comprobantes-user.component.css']
})
export class ComprobantesUserComponent implements OnInit {

  comprobantes: ComprobanteModel[]=[];
  paginador: any;

  comprobanteSeleccionado:ComprobanteModel;

  constructor(
    private comprobanteService: ComprobanteService,
    private activateRoute: ActivatedRoute,
    private authService:AuthService,
    private modalService:Modal2Service
  ) {}

  ngOnInit(): void {
    this.obtenerComprobantes();
  }

  obtenerComprobantes() {
    this.activateRoute.paramMap.subscribe((params) => {
      let page: number = parseInt(params.get('page'));
      //let idUsuario: number = parseInt(params.get('idUsuario'));
      if (!page) {
        page = 0;
      }
      //console.log(idUsuario);
      this.comprobanteService.getComprobantesPorUsuario(page,this.authService.usuario.idUsuario).subscribe((response) => {
        this.comprobantes = response.content as ComprobanteModel[];
        this.paginador = response;
      });
    });
  }

  cantidadiProductos(items:ItemComprobanteModel[]){
    let total=0;
    items.forEach(element => {
      total=total+element.cantidad;
  });
  return total;
  }

  abrirModal(comprobante:ComprobanteModel){
    this.comprobanteSeleccionado=comprobante;
    this.modalService.abrirModal();
  }
}
