import { Injectable } from '@angular/core';
import { ItemComprobanteModel } from '../models/itemComprobante.model';

@Injectable({
  providedIn: 'root'
})
export class ItemComprobanteService {

  items:ItemComprobanteModel[];



  constructor() { }

  public get Items():ItemComprobanteModel[]{
    if(this.items!=null){      
      return this.items;
    }else if(this.items==null && sessionStorage.getItem('items')!=null){
      this.items=JSON.parse(sessionStorage.getItem('items')) as ItemComprobanteModel[];
      console.log(this.items);
      return this.items;
    }
    return new Array;
  }
  
}


