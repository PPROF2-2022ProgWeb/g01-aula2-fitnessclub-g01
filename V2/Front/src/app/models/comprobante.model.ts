import { ComprobanteDetallesModel } from "./comprobante-detalles.model";
import { UsuarioModel } from "./usuario.model";

export class ComprobanteModel {
    idComprobante:number;
    fecha:Date;
    usuario:UsuarioModel;
    total:number;
    detalles:ComprobanteDetallesModel[];
}
