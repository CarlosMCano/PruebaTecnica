
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

export class BaseService {
    public _baseUrl: string;

    constructor(baseUrl) {
        this._baseUrl = baseUrl;

    }

    errorMgmt(error: HttpErrorResponse) {
        debugger
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
        }
        else if (error.status == 404) {
            errorMessage = "No se puede conectar al Servicio";
        } else if (error.statusText == "Forbidden" || error.status == 403) {
            errorMessage = "No autorizado para esta función";
        }
         else if (error.status == 0) {
            errorMessage = "No se puede conectar al Servicio";
        } else if(error.error) {
            // Get server-side error
            errorMessage = `${error.error}`;
        }else {
            // Get server-side error
            errorMessage = `${error}`;
        }
        return throwError(errorMessage);
    }

}