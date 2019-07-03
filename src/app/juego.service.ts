import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from "rxjs";
import { catchError, retry} from "rxjs/operators";
import { Juego } from "./juego";
import { map } from "rxjs/operators";

@Injectable()
export class JuegoService {
 
    //Se necesita http para comunicarse con un servidor remoto
    constructor(private _http : Http){ }
    PHP_API_SERVER = "http://localhost/api/angular/juego";

    //Obteniendo una lista de tipo juego 
    readJuegos(): Observable<Juego[]>{
        return this._http.get(this.PHP_API_SERVER).pipe(map((res: Response) => res.json()))
    }
}