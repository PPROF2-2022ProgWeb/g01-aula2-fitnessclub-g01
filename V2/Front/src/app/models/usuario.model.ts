import { LocalidadModel } from "./localidad.model";
import { PaisModel } from "./pais.model";
import { ProvinciaModel } from "./provincia.model";
import { RolModel } from "./rol.model";

export class UsuarioModel {
    idUsuario:number;
    nombre:string;
    apellido:string;
    email:string;
    direccion:string;
    localidad?:LocalidadModel;
    provincia?:ProvinciaModel;
    pais?:PaisModel;
    dni:number;
    password:string;
    rol:RolModel;
    estado:boolean;
}
