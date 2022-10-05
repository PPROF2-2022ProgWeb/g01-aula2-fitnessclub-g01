import { Component, OnInit } from '@angular/core';
import { ProductosService, Producto } from '../../service/productos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
})

export class TiendaComponent implements OnInit {

  productos:Producto[] = [];

  constructor( private _productosService:ProductosService, 
               private router:Router 
               ) { 

     console.log("constructor");
  }

  ngOnInit() {
    this.productos = this._productosService.getProductos();

  }
   verHeroe( idx:number){
     this.router.navigate ( ['/producto', idx] );
   }
}
