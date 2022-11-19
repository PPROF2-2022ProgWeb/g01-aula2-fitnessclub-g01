import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemComprobanteModel } from 'src/app/models/itemComprobante.model';
import { ProductoModel } from 'src/app/models/producto.model';
import { AuthService } from 'src/app/services/auth.service';
import { ItemComprobanteService } from 'src/app/services/item-comprobante.service';
import { ProductoService } from 'src/app/services/producto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {

  productos:ProductoModel[]=[];
  paginador:any;

  comprobanteDetalles:ItemComprobanteModel[]=[];

  constructor(private productoService:ProductoService, 
    private activateRoute:ActivatedRoute, private compDetralleService: ItemComprobanteService, private authService:AuthService, private router:Router) { }
  
  ngOnInit(): void {
    this.obtenerProductosConStockYActivos();
  }
  
  obtenerProductosConStockYActivos(){
    this.activateRoute.paramMap.subscribe(params=>{
      let page:number=parseInt(params.get('page'));
      if(!page){
        page=0;
      }
    this.productoService.getProductosConStockYActivos(page).subscribe(
      (response)=>{this.productos=response.content as ProductoModel[];
        this.paginador=response;}
    );
  }
  );  
  }




  agregarProducto(idProducto:number):void{
      
    this.comprobanteDetalles =this.authService.Items as ItemComprobanteModel[];
    

    if(this.authService.isAuthenticated()){
      this.productoService.getProducto(idProducto).subscribe(
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
    
               
          }else{
            if(producto.stock<cd.cantidad+1){
  
              Swal.fire('Stock','No dispone de Stock suficiente para la compra','warning');
              return;
            }
            cd.cantidad=cd.cantidad+1;
            console.log(this.comprobanteDetalles);
          }
          sessionStorage.setItem('items', JSON.stringify(this.comprobanteDetalles))
          Swal.fire('','Producto ' + producto.descripcion + ' agregado al carrito exitosamente!','success');
        }
        
      )
    }else{
      Swal.fire('Iniciar Sesion','Debe haber iniciado sesion para poder agregar un producto al Carrito', 'warning')
      this.router.navigate(['/login']);
    }

    

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


