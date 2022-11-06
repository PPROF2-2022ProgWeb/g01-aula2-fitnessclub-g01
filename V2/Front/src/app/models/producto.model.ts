import { DisciplinaModel } from "./disciplina.model";
import { RubroModel } from "./rubro.model";

export class ProductoModel {
    idProducto:number;
    descripcion:string;
    imagen:string;
    precioUnitario:number;
    stock:number;
    es_servicio:boolean;
    disciplina:DisciplinaModel;
    rubro:RubroModel;
    estado:boolean;
}
