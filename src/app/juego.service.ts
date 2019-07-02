import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from "rxjs";
import { catchError} from "rxjs/operators";
import { Juego } from "./juego";
import { map } from "rxjs/operators";

@Injectable()
export class ProductService {
 
    //Se necesita http para comunicarse con un servidor remoto
    constructor(private _http : Http){ }
 
    //Obteniendo una lista de tipo juego 
    readProducts(): Observable<Juego[]>{
        return this._http
            .get("http://localhost/api/juego/") //direccion de la api que estamos consumiendo
            .pipe(map((res: Response) => res.json()));
    }
}