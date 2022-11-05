import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { CommonModule} from  '@angular/common';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FormComponent } from './components/form/form.component';
import { HeroTitleComponent } from './components/Hero-Title/Hero-Title.component';
import { LoginComponent } from './components/login/login.component';
import { MenuComponent } from './components/menu/menu.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { SliderComponent } from './components/slider/slider.component';
import { TiendaComponent } from './components/tienda/tienda.component';
import { ProductoComponent } from './components/producto/producto.component';
import { RegistrarseComponent } from './components/registrarse/registrarse.component';
import { UpdateDataUserComponent } from './components/update-data-user/update-data-user.component';
import { GrillaProductosComponent } from './components/grilla-productos/grilla-productos.component';



//Service
import { ProductosService } from './service/productos.service';

//Rutas
import { APP_ROUTING,  } from './app.routes';
import { RouterModule } from '@angular/router';

import { PaisService } from './services/pais.service';
import { HttpClientModule } from '@angular/common/http';


import { DashUserComponent } from './components/dash-user/dash-user.component';
import { DashAdminComponent } from './components/dash-admin/dash-admin.component';
import { GrillaAdminComponent } from './components/grilla-admin/grilla-admin.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MenuComponent,
    HeroTitleComponent,
    NosotrosComponent,
    SliderComponent,
    FormComponent,
    FooterComponent,
    LoginComponent,
    PrincipalComponent,
    TiendaComponent,
    ProductoComponent,
    RegistrarseComponent,
    DashUserComponent,
    UpdateDataUserComponent,
    GrillaProductosComponent,
    DashAdminComponent,
    GrillaAdminComponent,
  
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    APP_ROUTING
  ],
  providers: [
    ProductosService, 
    PaisService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }



