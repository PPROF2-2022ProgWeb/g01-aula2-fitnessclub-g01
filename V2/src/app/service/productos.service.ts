import { Injectable } from '@angular/core';
@Injectable()
export class ProductosService {

    private productos:Producto[] =
    [
        {
          nombre: "Guante Full Training",
          codigo: "1050",
          marca: "OneFlex",
          color:"Negro",
          descripcion: "Diseñados para acompañar el rendimiento en la práctica deportiva. Con calce anatómico y palma reforzada. Con cierre en muñeca de Velcro®, palma reforzada para proporcionar mejor amortiguación y agarre.",
          img: "assets/img/guantes.jpg",
          precio: "$2500",
          talles: "XS/S/M/L/XL",
          tipo: "Producto"
        },
        {
            nombre: "Porta Celular Deportivo",
            codigo: "1060",
            marca: "OneFlex",
            color:"Negro",
            descripcion: "Diseño exclusivo para acompañar el entrenamiento y la práctica deportiva. Con system Cool Dry que permite la correcta ventilación del dispositivo electrónico. Ajuste regulable con Velcro®.",
            img:"assets/img/portacelular.jpg",
            precio: "$2000",
            talles: "Unico",
            tipo:"Servicio"
          }, 
          {
            nombre: "Faja Abdominal Neoprene",
            codigo: "1070",
            marca: "OneFlex",
            color:"Negro",
            descripcion: "Contiene la pared abdominal y previene eventraciones. Recomendada como complemente para la pérdida de peso. Con ajuste regulable de cierre Velcro®. Unisex.",
            img: "assets/img/fajaabdominal.jpg",
            precio: "$5500",
            talles: "XS/S/M/L/XL",
            tipo:"Producto"  
          },
      ];

    constructor() {
        console.log("Servicio listo para usar!!!");
     }

     /* como la clase es privada es necesario que creemos un metodo para acceder a los datos.*/
      getProductos():Producto[]{
        return this.productos;
      }   
      getProducto(idx: number){
        return this.productos[idx];
      } 
}

export interface Producto{
codigo:string;
nombre:string;
marca:string;
color:string;
descripcion:string;
img:string;
precio:string;
talles:string;
tipo:string;
}