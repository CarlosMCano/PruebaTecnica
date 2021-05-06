import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import { BaseService } from '../control/baseService';

import { Observable, throwError } from 'rxjs';
import { login } from '../modelos/login';

@Injectable({
    providedIn: 'root'
})
export class LoginService extends BaseService {


    constructor(
        @Inject('UrlApiSecure') baseUrl: string,
        private http: HttpClient,
        //private router: Router,       
    ) {
        super(baseUrl);
    }

    login(data: login) : any {
        return this.http.post(
            this._baseUrl + "Login/autenticar",
            data,
            {
                headers: {
                  "Content-type": "application/json; charset=UTF-8",
                },
              }
        ).pipe(
            catchError(this.errorMgmt)
        );
    } 

   
    
}