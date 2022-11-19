import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComprobanteModel } from 'src/app/models/comprobante.model';
import { ItemComprobanteModel } from 'src/app/models/itemComprobante.model';
import { ComprobanteService } from 'src/app/services/comprobante.service';

@Component({
  selector: 'app-comprobantes-user',
  templateUrl: './comprobantes-user.component.html',
  styleUrls: ['./comprobantes-user.component.css']
})
export class ComprobantesUserComponent implements OnInit {

  comprobantes: ComprobanteModel[]=[];
  paginador: any;

  constructor(
    private comprobanteService: ComprobanteService,
    private activateRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.obtenerComprobantes();
  }

  obtenerComprobantes() {
    this.activateRoute.paramMap.subscribe((params) => {
      let page: number = parseInt(params.get('page'));
      let idUsuario: number = parseInt(params.get('idUsuario'));
      if (!page) {
        page = 0;
      }
      console.log(idUsuario);
      this.comprobanteService.getComprobantesPorUsuarioSinPaginar(idUsuario).subscribe((response) => {
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
}
