import { Component, Input, OnInit } from '@angular/core';
import { ComprobanteModel } from 'src/app/models/comprobante.model';
import { ItemComprobanteModel } from 'src/app/models/itemComprobante.model';
import { ModalService } from 'src/app/services/modal.service';
import { Modal2Service } from 'src/app/services/modal2.service';

@Component({
  selector: 'detalle-comprobante',
  templateUrl: './form-detalle-comprobante.component.html',
  styleUrls: ['./form-detalle-comprobante.component.css']
})
export class FormDetalleComprobanteComponent implements OnInit {

  titulo: string = 'Detalle de Comprobante';

  @Input() comprobante: ComprobanteModel;



  constructor(public modalService:Modal2Service) { }

  ngOnInit(): void {
  }


  cerrarModal(){
    
   // this.comprobante=null;
  
    this.modalService.cerrarModal();
  }


}
