import { ProvinciaModel } from "./provincia.model";

export class LocalidadModel {
    idLocalidad:number;
    descripcion:string;
    provincia?:ProvinciaModel;
}
