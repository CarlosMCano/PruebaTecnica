import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { CookieService } from "ngx-cookie-service";
import { Observable } from "rxjs";
import { catchError } from "rxjs/operators";
import { BaseService } from "../control/baseService";
import { autor } from "../modelos/autor";

@Injectable({
    providedIn: 'root'
})

export class AutorService extends BaseService {


    constructor(@Inject('UrlApi') baseUrl: string, private http: HttpClient, private serviceCookie : CookieService
        //private router: Router,       
    ) {
        super(baseUrl);
    }

    Encabezado(){
        debugger
        let token = this.serviceCookie.get("token");
        const encabezado = {
            headers: new HttpHeaders({ "Authorization": "Bearer " + token, "Content-Type": "application/json"})
        }
        return encabezado;
    }

    ObtenerAutores() : Observable<Array<autor>> {
        debugger
        return this.http.get<Array<autor>>(this._baseUrl + 'Autores', this.Encabezado());
    }

    ObtenerAutoresFiltro(filtro : string, fechaInicio : Date, fechaFin : Date): Observable<Array<autor>> {
        return this.http.get<Array<autor>>(this._baseUrl + 'Autores/AutorByFiltro?filtro=' + filtro + '&fechaInicio=' + fechaInicio + '&fechaFin=' + fechaFin, this.Encabezado());
    }
    
}