import { PaisModel } from "./pais.model";

export class ProvinciaModel {
    idProvincia:number;
    descripcion:string;
    pais?:PaisModel;
}
