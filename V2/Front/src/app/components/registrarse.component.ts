import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PaisModel } from 'src/app/models/pais.model';
import { ProvinciaModel } from 'src/app/models/provincia.model';
import { PaisService } from 'src/app/services/pais.service';
import { ValidadoresService } from '../../service/validadores.service';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})
export class RegistrarseComponent implements OnInit {
  forma: FormGroup;

  paises:PaisModel[];
  provincias:ProvinciaModel[];


  constructor( private fb: FormBuilder,
               private validadores: ValidadoresService,private paisService:PaisService) { 
     this.crearFormulario();

  }

  ngOnInit() {
    this.paisService.getPaises().subscribe(
      paises=>{this.paises=paises;
        console.log(paises);
      }
    )
  }

  get nombreNoValido(){
    return this.forma.get('nombre').invalid && this.forma.get('nombre').touched
  }
  get apellidoNoValido(){
    return this.forma.get('apellido').invalid && this.forma.get('apellido').touched
  }
  get correoNoValido() {
    return this.forma.get('correo').invalid && this.forma.get('correo').touched
  }
  get direccionNoValido() {
    return this.forma.get('direccion').invalid && this.forma.get('direccion').touched
  }
  get localidadNoValido() {
    return this.forma.get('localidad').invalid && this.forma.get('localidad').touched
  }
  get provinciaNoValido() {
    return this.forma.get('provincia').invalid && this.forma.get('provincia').touched
  }
  get paisNoValido() {
    return this.forma.get('pais').invalid && this.forma.get('pais').touched
  }
  get dniNoValido() {
    return this.forma.get('dni').invalid && this.forma.get('dni').touched
  }
  get pass1NoValido() {
    return this.forma.get('pass1').invalid && this.forma.get('pass1').touched
  }
  get pass2NoValido() {
    const pass1= this.forma.get('pass1').value;
    const pass2= this.forma.get('pass2').value;
    return (pass1 === pass2) ? false : true;

  }


  crearFormulario() {
    this.forma = this.fb.group ({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      apellido: ['', [Validators.required, Validators.minLength(3)]],
      correo: ['', [Validators.required,  Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      direccion: ['', [Validators.required, Validators.minLength(3)]],
      localidad:  ['', [Validators.required, Validators.minLength(3)]],
      provincia: ['', [Validators.required, Validators.minLength(3)]],
      pais: ['', [Validators.required, Validators.minLength(3)]],
      dni: ['', [Validators.required, Validators.minLength(7)]],
      pass1: ['', [Validators.required]],
      pass2: ['', [Validators.required]],
    
     },{ validators: this.validadores.passwordsIguales ('pass1','pass2')
    });
  }
  guardar() {
    console.log( this.forma );

    if ( this.forma.invalid ) {

      return Object.values( this.forma.controls ).forEach( control => {
        
        if ( control instanceof FormGroup ) {
          Object.values( control.controls ).forEach( control => control.markAsTouched() );
        } else {
          control.markAsTouched();
        }
        
        
      });
     
    }
    this.forma.reset({
      nombre: '',
      apellido: '',
      correo: '',
      direccion: '',
      localidad: '',
      provincia: '',
      pais: '',
      dni: '',
      pass1: '',
      pass2: '',
    });
  }
  
  obtenerProvincias(){
    //this.paisService.getProvincias()
  }


  compararPais(p1:PaisModel,p2:PaisModel):boolean{
    if(p1===undefined && p2===undefined){
      console.log(p1);
      return true;
    }
    return p1===null || p2===null || p1===undefined || p2===undefined?false:p1.idPais==p2.idPais;
  }

  compararProvincia(p1:ProvinciaModel,p2:ProvinciaModel):boolean{
    if(p1===undefined && p2===undefined){
      console.log(p1);
      return true;
    }
    return p1===null || p2===null || p1===undefined || p2===undefined?false:p1.idProvincia==p2.idProvincia;
  }

}


