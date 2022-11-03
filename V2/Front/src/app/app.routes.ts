import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FormComponent } from './components/form/form.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { LoginComponent } from './components/login/login.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { TiendaComponent } from './components/tienda/tienda.component';
import { ProductoComponent } from './components/producto/producto.component';
import { RegistrarseComponent } from './components/registrarse/registrarse.component';
import { DashUserComponent } from './components/dash-user/dash-user.component';
import { UpdateDataUserComponent } from './components/update-data-user/update-data-user.component';


const APP_ROUTES: Routes = [
  { path: 'principal', component: PrincipalComponent},
  { path: 'login', component: LoginComponent},
  { path: 'contacto', component: FormComponent},
  { path: 'nosotros', component: NosotrosComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'tienda', component: TiendaComponent}, 
  { path: 'registro', component: RegistrarseComponent},  
  { path: 'producto/:id', component: ProductoComponent},
  { path: 'dashboardUser', component: DashUserComponent},
  { path: 'updateUser', component: UpdateDataUserComponent},
  { path: '**', pathMatch:'full', redirectTo:'principal'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true});
