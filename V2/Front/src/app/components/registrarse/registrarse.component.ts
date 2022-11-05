import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalidadModel } from 'src/app/models/localidad.model';
import { PaisModel } from 'src/app/models/pais.model';
import { ProvinciaModel } from 'src/app/models/provincia.model';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { PaisService } from 'src/app/services/pais.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css'],
})
export class RegistrarseComponent implements OnInit {
  titulo: string = 'Formulario de Registro';

  usuario: UsuarioModel = new UsuarioModel();

  paises: PaisModel[];

  provincias: ProvinciaModel[];

  localidades: LocalidadModel[];

  formRegistro: FormGroup;

  errores:string[];

  constructor(
    private formBuilder: FormBuilder,
    private usuarioService: UsuarioService,
    private router: Router,
    private paisService: PaisService,
    private activateRouter: ActivatedRoute
  ) {
    this.formRegistro = formBuilder.group({
      nombre: ['',Validators.required],
      apellido: ['', Validators.required],
      email: ['',[Validators.required, Validators.email]],
      pais: ['' ,Validators.required],
      provincia: ['',Validators.required],
      localidad: ['' ,Validators.required],
      direccion: ['',Validators.required],
      dni: ['',Validators.required],
      password: ['',Validators.required],
      password2: ['' ,Validators.required]
    },{ validators: this.CompararPasswords('password','password2')
  });
  }

  get f(){
    return this.formRegistro.controls;
  }

  ngOnInit(): void {
    this.cargarPaises();
    this.cargarUsuario();
  }
  
  CompararPasswords(controlPassword1: string, controlPassword2:string){
    return (frmGroup:FormGroup)=>{
      const control=frmGroup.controls[controlPassword1];
      const control2=frmGroup.controls[controlPassword2];

      if (control2.errors && !control2.errors['compararPasswords']) {
        return;
      }
      if (control.value !== control2.value) {
        control2.setErrors({ compararPasswords: true });
      } else {
        control2.setErrors(null);
      }
    }
  }


  cargarPaises() {
    this.paisService.getPaises().subscribe((paises) => {
      //    console.log(paises);
      this.paises = paises;
    });
  }
  obtenerProvincias() {
    console.log('Pais');
    console.log(this.formRegistro.value.pais);
    if (this.formRegistro.value.pais != null) {
      if (this.formRegistro.value.pais === undefined) {
        this.provincias = null;
        this.localidades = null;
      } else {
        this.paisService
          .getProvincias(this.formRegistro.value.pais.idPais)
          .subscribe((provincias) => (this.provincias = provincias));
      }
    }
  }

  obtenerLocalidades() {
    if (this.formRegistro.value.provincia != null) {
      if (
        this.formRegistro.value.pais === undefined ||
        this.formRegistro.value.provincia === undefined
      ) {
        this.localidades = null;
      } else {
        this.paisService
          .getLocalidades(this.formRegistro.value.provincia.idProvincia)
          .subscribe((localidades) => (this.localidades = localidades));
      }
    }
  }

  public guardar(): void {
    console.log(this.usuario);
      this.usuarioService.guardar(this.usuario).subscribe((usuario) => {
        this.router.navigate(['/tienda']);
        Swal.fire(
          'Nuevo Usuario',
          `El Usuario ${usuario.apellido}, ${usuario.nombre} ha sido creado con exito!`,
          'success'
        );
      },err=>{
        this.errores=err.error.errors as string[];
        console.error('Codigo de error del back ' + err.status);
        console.error(err.error.errors);
      });
  }

  public update(): void {
    this.usuarioService.modificar(this.usuario).subscribe((usuario) => {
      this.router.navigate(['/usuarios']);
      Swal.fire(
        'Usuario actualizado',
        `El Usuario ${usuario.apellido}, ${usuario.nombre} ha sido modificado con exito!`,
        'success'
      );
    });
  }

  cargarUsuario(): void {
    this.activateRouter.params.subscribe((params) => {
      let id = params['id'];
      if (id) {
        this.titulo = 'Editar Usuario';
        this.usuarioService.getUsuario(id).subscribe((usuario) => {
          //this.obtenerProvincias();
          //this.obtenerLocalidades();
          this.usuario = usuario;

          console.log(this.usuario);
        });
      }
    });
  }

  compararPais(p1: PaisModel, p2: PaisModel): boolean {
    if (p1 === undefined && p2 === undefined) {
      return true;
    }
    return p1 === null || p2 === null || p1 === undefined || p2 === undefined
      ? false
      : p1.idPais == p2.idPais;
  }
  compararProvincia(p1: ProvinciaModel, p2: ProvinciaModel): boolean {
    if (p1 === undefined && p2 === undefined) {
      return true;
    }
    return p1 === null || p2 === null || p1 === undefined || p2 === undefined
      ? false
      : p1.idProvincia == p2.idProvincia;
  }

  compararLocalidad(p1: LocalidadModel, p2: LocalidadModel): boolean {
    if (p1 === undefined && p2 === undefined) {
      return true;
    }
    return p1 === null || p2 === null || p1 === undefined || p2 === undefined
      ? false
      : p1.idLocalidad == p2.idLocalidad;
  }
    







  get nombreNoValido(){
    return this.formRegistro.get('nombre').invalid && this.formRegistro.get('nombre').touched
  }
  get apellidoNoValido(){
    return this.formRegistro.get('apellido').invalid && this.formRegistro.get('apellido').touched
  }
  get correoNoValido() {
    return this.formRegistro.get('email').invalid && this.formRegistro.get('email').touched
  }

  get direccionNoValido() {
    return this.formRegistro.get('direccion').invalid && this.formRegistro.get('direccion').touched
  }
  get localidadNoValido() {
    return this.formRegistro.get('localidad').invalid && this.formRegistro.get('localidad').touched
  }
  get provinciaNoValido() {
    return this.formRegistro.get('provincia').invalid && this.formRegistro.get('provincia').touched
  }
  get paisNoValido() {
    return this.formRegistro.get('pais').invalid && this.formRegistro.get('pais').touched
  }
  get dniNoValido() {
    return this.formRegistro.get('dni').invalid && this.formRegistro.get('dni').touched
  }
  get pass1NoValido() {
    return this.formRegistro.get('password').invalid && this.formRegistro.get('password').touched
  }
  get pass2NoValido() {
    return this.formRegistro.get('password2').invalid && this.formRegistro.get('password2').touched
  }

}
