import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemComprobanteModel } from '../models/itemComprobante.model';
import { RolModel } from '../models/rol.model';
import { UsuarioModel } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _usuario:UsuarioModel;
  private _token:string;
  private _items:ItemComprobanteModel[];

  constructor(private http:HttpClient) { }

  public get usuario():UsuarioModel{
    if(this._usuario!=null){
      return this._usuario;
    }else if(this._usuario==null && sessionStorage.getItem('usuario')!=null){
      this._usuario=JSON.parse(sessionStorage.getItem('usuario')) as UsuarioModel;
      return this._usuario;
    }
    return new UsuarioModel();
  }


  
  public get Items():ItemComprobanteModel[]{
    console.log('Valor');
    if(this._items!=null){      
      console.log('Item Nulo');
      return this._items;
    }else if(this._items==null && sessionStorage.getItem('items')!=null){
      this._items=JSON.parse(sessionStorage.getItem('items')) as ItemComprobanteModel[];
      console.log('Item Con Valor');
      
      return this._items;
    }
    return new Array;
  }
  

  public get token():string{
    if(this._token!=null){
      return this._token;
    }else if(this._token==null && sessionStorage.getItem('token')!=null){
      this._token=sessionStorage.getItem('token');
      return this._token;
    }
    return null;  
  }

  login(usuario:UsuarioModel):Observable<any>{
    const urlEndPoint='http://localhost:8080/oauth/token';
    const credenciales=btoa('angularapp'+':'+'12345');


    const httpHeaders=new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded','Authorization': 'Basic ' + credenciales});

    let params=new URLSearchParams();
    params.set('grant_type','password');
    params.set('username',usuario.email);
    params.set('password',usuario.password);
    console.log(params.toString());
    return this.http.post<any>(urlEndPoint,params.toString(), {headers: httpHeaders});
  }

 
  guardarUsuario(accessToken: string):void{
    let payload=this.obtenerDatosToken(accessToken);
    this._usuario=new UsuarioModel();
    this._usuario.nombre=payload.nombre;
    this._usuario.apellido=payload.apellido;
    this._usuario.email=payload.email;
    this._usuario.idUsuario=payload.idUsuario;
    //this._usuario.roles=payload.authorities;
    this.usuario.rol=new RolModel();
    this._usuario.rol.nombre=payload.authorities[0];

    sessionStorage.setItem('usuario', JSON.stringify(this._usuario));
  }

  guardarToken(accessToken: string):void{
    this._token=accessToken;
    sessionStorage.setItem('token',accessToken);
  }

  guardarItems(accessToken: string):void{
    this._token=accessToken;
    sessionStorage.setItem('token',accessToken);
  }

  obtenerDatosToken(accessToken: string):any{
    if(accessToken!=null){
      return JSON.parse(atob(accessToken.split(".")[1]));
    }
    return null;
  }

  isAuthenticated():boolean{
    let payload=this.obtenerDatosToken(this.token);
    if(payload !=null && payload.user_name && payload.user_name.length>0){
      return true;
    }
    return false;
  }

  hasRole(rol:string):boolean{
  //console.log(this.usuario.roles)
    //if(this.usuario.roles.includes(rol)){
      if(this.usuario.rol.nombre==rol){
      return true;
    }
    return false;
  }

  //comprobanteDetalles:ItemComprobanteModel[];

  logout():void{
    this._token=null;
    this._usuario=null;
    //this.comprobanteDetalles=[];
    //sessionStorage.setItem('items', JSON.stringify(this.comprobanteDetalles))
    sessionStorage.clear();
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('usuario');
    
      
    sessionStorage.removeItem('items');

    
  }

  borrarSessionItems():void{
    
    sessionStorage.removeItem('items');
    
  }
}