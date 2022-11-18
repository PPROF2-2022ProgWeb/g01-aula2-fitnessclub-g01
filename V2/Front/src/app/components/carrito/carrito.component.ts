import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComprobanteModel } from 'src/app/models/comprobante.model';
import { ItemComprobanteModel } from 'src/app/models/itemComprobante.model';
import { ProductoModel } from 'src/app/models/producto.model';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { AuthService } from 'src/app/services/auth.service';
import { ComprobanteService } from 'src/app/services/comprobante.service';
import { ItemComprobanteService } from 'src/app/services/item-comprobante.service';
import { ProductoService } from 'src/app/services/producto.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {



  comprobanteDetalles:ItemComprobanteModel[]=[];

  constructor(private activateRoute:ActivatedRoute, private productoService:ProductoService, private compDetralleService:ItemComprobanteService, private authService:AuthService, private compService:ComprobanteService, private usuarioService:UsuarioService) { }

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

  usuario:UsuarioModel;
  
   finalizarCompra(){
     let comprobante:ComprobanteModel=new ComprobanteModel();
    
    if(this.calcularTotal()>0){
      comprobante==new ComprobanteModel();

    
      
      this.usuarioService.getUsuario(this.authService.usuario.idUsuario).subscribe(
        usuario=>this.usuario=usuario
      )
      comprobante.usuario=this.usuario;
    console.log(comprobante.usuario);
      comprobante.total=this.calcularTotal();
      comprobante.items=this.comprobanteDetalles;

           
      this.compService.guardar(comprobante).subscribe();
      //

    }else{
      Swal.fire('Total compra cero','El total de la compra no puede ser cero', 'warning');
    }
   }


}
