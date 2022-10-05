import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../service/productos.service';


@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})


export class ProductoComponent {

  producto:any ={};

  constructor( private activatedRoute: ActivatedRoute,  
               private _productosService: ProductosService  ){    

         this.activatedRoute.params.subscribe (params => {
         this.producto = this._productosService.getProducto( params['id']);
       });
    }
}



