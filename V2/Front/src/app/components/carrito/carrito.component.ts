import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemComprobanteModel } from 'src/app/models/itemComprobante.model';
import { ProductoModel } from 'src/app/models/producto.model';
import { ItemComprobanteService } from 'src/app/services/item-comprobante.service';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {



  comprobanteDetalles:ItemComprobanteModel[]=[];

  constructor(private activateRoute:ActivatedRoute, private productoService:ProductoService, private compDetralleService:ItemComprobanteService) { }

  ngOnInit(): void {
        //this.comprobanteDetalles=this.compDetralleService.Items;
    //console.log(this.comprobanteDetalle);
    this.comprobanteDetalles =this.compDetralleService.Items as ItemComprobanteModel[];

    console.log(this.comprobanteDetalles);
    //this.agregarProducto();
  }
  /*
  agregarProducto():void{
    this.activateRoute.params.subscribe(params=>{
      let id=params['id'];
      if(id){
       this.productoService.getProducto(id).subscribe(
        producto=>{
          //this.comprobanteDetalles = this.compDetralleService.Items;
          
       console.log(producto);
          const cd:ItemComprobanteModel=this.RecorrerArrayBuscandoProducto(this.comprobanteDetalles,producto);
          if(cd===undefined || cd===null){
             let comprobanteDetalle=new ItemComprobanteModel();
             comprobanteDetalle.cantidad=1;
             comprobanteDetalle.producto=producto;
              comprobanteDetalle.precioUnitario=producto.precioUnitario;
              
              this.comprobanteDetalles.push(comprobanteDetalle);

                console.log(this.comprobanteDetalles)
          }else{
            //console.log(producto);
            //console.log(cd.precio_unitario)
            cd.cantidad=cd.cantidad+1;
          }
          sessionStorage.setItem('items', JSON.stringify(this.comprobanteDetalles))
          //console.log(this.comprobanteDetalles)
          //this.comprobanteDetalle.producto=producto;
            
        



        }
       )
      }
    })
  }
*/
  calcularTotal():number{
    let total:number=0;
    this.comprobanteDetalles.forEach(
      cd=>{
        total=  total+(cd.precioUnitario*cd.cantidad);
      }
    )
    return total;
  }

  RecorrerArrayBuscandoProducto(array:ItemComprobanteModel[], producto:ProductoModel):ItemComprobanteModel{
      for (let index = 0; index < array.length; index++) {
        if(array[index].producto.idProducto===producto.idProducto){
          return array[index];
        }
      }
      return null;
  }

}
