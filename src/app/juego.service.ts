import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from "rxjs";
import { catchError, retry} from "rxjs/operators";
import { Juego } from "./juego";
import { map } from "rxjs/operators";
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class JuegoService {
 
    //Se necesita http para comunicarse con un servidor remoto
    constructor(private _http : Http){ }
    PHP_API_SERVER = "http://localhost/api/angular/juego";

    //Obteniendo una lista de tipo juego 
    getAll(): Observable<Juego[]>{
        return this._http.get(this.PHP_API_SERVER).pipe(map((res: Response) => res.json()))
    }
          
    crearJuego(juego): Observable<Juego[]>{
        let formData : FormData = new FormData();
        formData.append('titulo', juego.titulo);
        formData.append('compania', juego.compania);
        formData.append('genero', juego.genero);
        formData.append('fecha_lanzamiento', juego.fecha_lanzamiento);
        let cabecera = new Headers({'Content-Type': 'application/json'});
        let opciones = new RequestOptions({headers: cabecera});
        return this._http.post(this.PHP_API_SERVER, formData).pipe(map((res: Response) => res.json()));
    }

    deleteJuego(id) : Observable<number>{
        let cabecera = new Headers({'Content-Type': 'application/json'});
        let opciones = new RequestOptions({headers: cabecera});
        console.log(`${this.PHP_API_SERVER}/${id}`);
        return this._http.delete(`${this.PHP_API_SERVER}/${id}`, opciones).pipe(map((res: Response) => res.json()));
    }


}