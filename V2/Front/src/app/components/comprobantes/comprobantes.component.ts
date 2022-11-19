import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComprobanteModel } from 'src/app/models/comprobante.model';
import { ItemComprobanteModel } from 'src/app/models/itemComprobante.model';
import { ComprobanteService } from 'src/app/services/comprobante.service';
import { Modal2Service } from 'src/app/services/modal2.service';

@Component({
  selector: 'app-comprobantes',
  templateUrl: './comprobantes.component.html',
  styleUrls: ['./comprobantes.component.css'],
})
export class ComprobantesComponent implements OnInit {
  comprobantes: ComprobanteModel[]=[];
  paginador: any;

  comprobanteSeleccionado:ComprobanteModel;

  constructor(
    private comprobanteService: ComprobanteService,
    private activateRoute: ActivatedRoute,
    private modalService:Modal2Service
  ) {}

  ngOnInit(): void {
    this.obtenerComprobantes();
  }

  obtenerComprobantes() {
    this.activateRoute.paramMap.subscribe((params) => {
      let page: number = parseInt(params.get('page'));
      if (!page) {
        page = 0;
      }
      this.comprobanteService.getComprobantes(page).subscribe((response) => {
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
