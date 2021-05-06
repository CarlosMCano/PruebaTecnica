import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';


export function getUrlLogin() {
  return "login";
}

export function getUrlApiSecure() {
  return "https://apipruebacano.azurewebsites.net/" 
}

export function getUrlApi() {
  return "https://apipruebacano.azurewebsites.net/api/"
}


const provider = [
  { provide: "UrlLogin", useFactory: getUrlLogin, deps: [] },
  { provide: "UrlApiSecure", useFactory: getUrlApiSecure, deps: [] },
  { provide: "UrlApi", useFactory: getUrlApi, deps: [] },
];

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic(provider).bootstrapModule(AppModule)
  .catch(err => console.error(err));

