import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { IndexRoutingModule } from './index-routing.module';
import { IndexComponent } from './index.component';
import { AutoresComponent } from '../componentes/autores/autores.component';
import { LibrosComponent } from '../componentes/libros/libros.component';
import { SincronizacionComponent } from '../componentes/sincronizacion/sincronizacion.component';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { NgxPaginationModule } from 'ngx-pagination';




@NgModule({
  declarations: [
    IndexComponent,
    AutoresComponent,
    LibrosComponent,
    SincronizacionComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    IndexRoutingModule,
    NgxSpinnerModule,
    NgbModule,
    NgxPaginationModule

  ],
  exports: [
    IndexComponent
  ],
  providers: [NgbModal, NgxSpinnerService],
  bootstrap: [SincronizacionComponent],
})
export class IndexModule { }