import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { Acceso } from './control/Acceso';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  { path: '', redirectTo: '/index/libros', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'index', component: IndexComponent, canActivate: [Acceso]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

