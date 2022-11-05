import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, Observable, throwError } from 'rxjs';
import Swal from 'sweetalert2';
import { UsuarioModel } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private URL: string = 'http://localhost:8080/api/usuarios';

  //Cabecera
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http:HttpClient, private router:Router) { }

  private isNoAutorizado(e: { status: number; }):boolean{
    if(e.status==401 || e.status==403){
      this.router.navigate(['/login']);
      return true;
    }
    return false;
  }

  guardar(usuario:UsuarioModel):Observable<UsuarioModel>{
    return this.http.post(this.URL, usuario,{headers:this.httpHeaders}).pipe(
      map((response:any)=>response.usuario as UsuarioModel),
      catchError(e=>{
        if(this.isNoAutorizado(e)){
          return throwError(e);
        }
  
        if(e.status==400){
            return throwError(e);  
        }

        Swal.fire( e.error.mensaje,e.error.error ,'error');
        return throwError(e);
      })
    );
  }

  getUsuario(idUsuario:number):Observable<UsuarioModel>{
    return this.http.get<UsuarioModel>(`${this.URL}/${idUsuario}`).pipe(
      catchError(e=>{
        if(this.isNoAutorizado(e)){
          return throwError(e);
        }
        if(e.status==400){
          return throwError(e);  
        }
        this.router.navigate['/usuarios']
        Swal.fire('Error al editar', e.error.mensaje,'error');
        return throwError(e);
      })
    );
  }

  modificar(usuario:UsuarioModel):Observable<UsuarioModel>{  
    return this.http.put<any>(`${this.URL}/${usuario.idUsuario}`,usuario,{headers:this.httpHeaders}).pipe(
      map((response:any)=>response.usuario as UsuarioModel),
      catchError(e=>{
        if(this.isNoAutorizado(e)){
          return throwError(e);
        }
        if(e.status==400){
          return throwError(e);  
        }
        Swal.fire( e.error.mensaje,e.error.error ,'error');
        return throwError(e);
      })
    );
  }

  eliminar(idUsuario:number):Observable<UsuarioModel>{
      return this.http.delete<any>(`${this.URL}/${idUsuario}`,{headers:this.httpHeaders}).pipe(
        map((response:any)=>response.usuario as UsuarioModel),
        catchError(e=>{
          if(this.isNoAutorizado(e)){
            return throwError(e);
          }
          if(e.status==400){
            return throwError(e);  
          }
          Swal.fire( e.error.mensaje,e.error.error ,'error');
          return throwError(e);
        })
      );
  }
}
