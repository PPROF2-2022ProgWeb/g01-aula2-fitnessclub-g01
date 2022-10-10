import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FormComponent } from './components/form/form.component';
import { LoginComponent } from './components/login/login.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { TiendaComponent } from './components/tienda/tienda.component';
import { ProductoComponent } from './components/producto/producto.component';

const APP_ROUTES: Routes = [
  { path: 'principal', component: PrincipalComponent},
  { path: 'login', component: LoginComponent},
  { path: 'contacto', component: FormComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'tienda', component: TiendaComponent},  
  { path: 'producto/:id', component: ProductoComponent},
  {path: '**', pathMatch:'full', redirectTo:'principal'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true});
