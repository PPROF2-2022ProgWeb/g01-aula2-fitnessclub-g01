import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComprobanteModel } from 'src/app/models/comprobante.model';
import { ComprobanteService } from 'src/app/services/comprobante.service';

@Component({
  selector: 'app-comprobantes',
  templateUrl: './comprobantes.component.html',
  styleUrls: ['./comprobantes.component.css'],
})
export class ComprobantesComponent implements OnInit {
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
      if (!page) {
        page = 0;
      }
      this.comprobanteService.getComprobantes(page).subscribe((response) => {
        this.comprobantes = response.content as ComprobanteModel[];
        this.paginador = response;
      });
    });
  }
}
