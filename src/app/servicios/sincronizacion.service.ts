import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { BaseService } from "../control/baseService";
import { vmRespuesta } from "../modelos/vmRespuesta";
import { catchError, retry } from 'rxjs/operators';
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class SincronizacionService extends BaseService {


    constructor(@Inject('UrlApi') baseUrl: string, private http: HttpClient
        //private router: Router,       
    ) {
        super(baseUrl);
    }

    sincronizar() : Observable<vmRespuesta>{
        return this.http.post<vmRespuesta>(
            this._baseUrl + "Sincronizacion",
            {
        }).pipe(
            catchError(this.errorMgmt)
        );
    }

   
    
}