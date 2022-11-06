import { Injectable } from '@angular/core';
import { ComprobanteDetallesModel } from '../models/comprobante-detalles.model';

@Injectable({
  providedIn: 'root'
})
export class ComprobanteDetallesService {


  comprobanteDetalles:ComprobanteDetallesModel[];

  constructor() { }


  
  public get Items():ComprobanteDetallesModel[]{
    if(this.comprobanteDetalles!=null){      
      return this.comprobanteDetalles;
    }else if(this.comprobanteDetalles==null && sessionStorage.getItem('items')!=null){
      this.comprobanteDetalles=JSON.parse(sessionStorage.getItem('items')) as ComprobanteDetallesModel[];
      return this.comprobanteDetalles;
    }
    return new Array;
  }
}
