import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders, HttpRequest } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { PaisModel } from '../models/pais.model';
import { ProvinciaModel } from '../models/provincia.model';
import { LocalidadModel } from '../models/localidad.model';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  private URL: string = 'http://localhost:8080/api/paises';

  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http : HttpClient, private router:Router) { }

  private isNoAutorizado(e: { status: number; }):boolean{
    if(e.status==401 || e.status==403){
      this.router.navigate(['/login']);
      return true;
    }
    return false;
  }

  getPaises():Observable<PaisModel[]>{
    return this.http.get<PaisModel[]>(this.URL /*,{headers: this.agregarAuthorizationHeader()}*/).pipe(
      catchError(e=>{
        //Swal.fire('Error al obtener datos',e.error.mensaje,'error')
        this.isNoAutorizado(e);
        return throwError(e)
      })
    )
  }
  
  getProvincias(idPais:number):Observable<ProvinciaModel[]>{
    return this.http.get<ProvinciaModel[]>(`${this.URL}/provincias/${idPais}`,{headers:this.httpHeaders}).pipe(
      catchError(e=>{
        //Swal.fire('Error al obtener datos',e.error.mensaje,'error')
        this.isNoAutorizado(e);
        return throwError(e)
      })
    ) ;
  }

  getLocalidades(idProvincia:number):Observable<LocalidadModel[]>{
    return this.http.get<LocalidadModel[]>(`${this.URL}/provincias/localidades/${idProvincia}`,{headers:this.httpHeaders}).pipe(
      catchError(e=>{
        //Swal.fire('Error al obtener datos',e.error.mensaje,'error')
        this.isNoAutorizado(e);
        return throwError(e)
      })
    ) ;
  }
}
