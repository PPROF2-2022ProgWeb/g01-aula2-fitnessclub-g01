import { SlicePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
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

//Service
import { ProductosService } from './service/productos.service';


//Rutas
import { APP_ROUTING,  } from './app.routes';

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
  ],
  imports: [
    BrowserModule,
    FormsModule,
    APP_ROUTING
  ],
  providers: [
    ProductosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
