import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, throwError } from 'rxjs';
import Swal from 'sweetalert2';
import { ComprobanteDetallesModel } from '../models/comprobante-detalles.model';
import { ProductoModel } from '../models/producto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {


  private URL: string = 'http://localhost:8080/api/productos';

  constructor(private http: HttpClient, private router:Router) { }

  private isNoAutorizado(e: { status: number; }):boolean{
    if(e.status==401 || e.status==403){
      this.router.navigate(['/login']);
      return true;
    }
    return false;
  }



  getProductoById(idProducto:number):Observable<ProductoModel>{
    return this.http.get<ProductoModel>(`${this.URL}/${idProducto}`).pipe(
      catchError(e=>{
        if(this.isNoAutorizado(e)){
          return throwError(e);
        }
        if(e.status==400){
          return throwError(e);  
        }
        this.router.navigate['/usuarios']
       // Swal.fire('Error al editar', e.error.mensaje,'error');
        return throwError(e);
      })
    );
  }


}
