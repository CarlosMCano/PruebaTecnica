import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Acceso } from '../control/Acceso';
import { IndexComponent } from './index.component';

import { AutoresComponent } from '../componentes/autores/autores.component';
import { LibrosComponent } from '../componentes/libros/libros.component';
import { SincronizacionComponent } from '../componentes/sincronizacion/sincronizacion.component';


const routes: Routes = [
  {
    path: 'index', component: IndexComponent, canActivate: [Acceso],
    children: [
      {
        path: 'libros',
        component: LibrosComponent,
        canActivate: [Acceso]
      },
      {
        path: 'autores',
        component: AutoresComponent,
        canActivate: [Acceso]
      },
      {
        path: 'sincronizacion',
        component: SincronizacionComponent,
        canActivate: [Acceso]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class IndexRoutingModule { }
