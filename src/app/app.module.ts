import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { IndexModule } from './index/index.module';
import { LoginModule } from './componentes/login/login.module';


import { CookieService } from 'ngx-cookie-service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Interceptor } from './control/Interceptor';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SincronizacionComponent } from './componentes/sincronizacion/sincronizacion.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    //Index
    IndexModule,

    //login
    LoginModule,

    //otros globales
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
    // LayoutModule,
  ],
  providers: [ NgbModal,   
    CookieService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Interceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
