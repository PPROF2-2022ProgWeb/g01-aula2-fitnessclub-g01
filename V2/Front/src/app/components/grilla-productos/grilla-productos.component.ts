import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComprobanteDetallesModel } from 'src/app/models/comprobante-detalles.model';
import { ProductoModel } from 'src/app/models/producto.model';
import { ComprobanteDetallesService } from 'src/app/services/comprobante-detalles.service';
import { ProductoService } from 'src/app/services/producto.service';


@Component({
  selector: 'app-grilla-productos',
  templateUrl: './grilla-productos.component.html',
  styleUrls: ['./grilla-productos.component.css']
})
export class GrillaProductosComponent implements OnInit {

  comprobanteDetalles:ComprobanteDetallesModel[]=[];
  
 // comprobanteDetalle:ComprobanteDetallesModel;

  

  constructor(private activateRoute:ActivatedRoute, private productoService:ProductoService, private compDetralleService:ComprobanteDetallesService) { }

  ngOnInit(): void {
    //this.comprobanteDetalles=this.compDetralleService.Items;
    //console.log(this.comprobanteDetalle);
    this.comprobanteDetalles =this.compDetralleService.Items as ComprobanteDetallesModel[];

    console.log(this.comprobanteDetalles);
    this.agregarProducto();
  } 

  agregarProducto():void{
    this.activateRoute.params.subscribe(params=>{
      let id=params['id'];
      if(id){
       this.productoService.getProductoById(id).subscribe(
        producto=>{
          //this.comprobanteDetalles = this.compDetralleService.Items;
          
       console.log(producto);
          const cd:ComprobanteDetallesModel=this.RecorrerArrayBuscandoProducto(this.comprobanteDetalles,producto);
          if(cd===undefined || cd===null){
             let comprobanteDetalle=new ComprobanteDetallesModel();
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
            
        


          /*
          this.comprobanteDetalles.forEach(item=>{
            console.log(item);
            if(item.producto===producto){
              item.cantidad=item.cantidad+1;
            }else{
              this.comprobanteDetalle=new ComprobanteDetallesModel();
              this.comprobanteDetalle.cantidad=1;
              this.comprobanteDetalle.producto=producto;
              console.log(producto);
              this.comprobanteDetalle.precio_unitario=producto.precio_unitario;
              this.comprobanteDetalles.push(this.comprobanteDetalle);
            }
          })*/
        }
       )
      }
    })
  }

  calcularTotal():number{
    let total:number=0;
    this.comprobanteDetalles.forEach(
      cd=>{
        total=total+(cd.precioUnitario*cd.cantidad);
      }
    )
    return total;
  }

  RecorrerArrayBuscandoProducto(array:ComprobanteDetallesModel[], producto:ProductoModel):ComprobanteDetallesModel{
      for (let index = 0; index < array.length; index++) {
        if(array[index].producto.idProducto===producto.idProducto){
          return array[index];
        }
      }
      return null;
  }



}
