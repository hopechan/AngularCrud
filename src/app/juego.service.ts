import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from "rxjs";
import { Juego } from "./juego";
import { map } from "rxjs/operators";

@Injectable()
export class JuegoService {
 
    //Se necesita http para comunicarse con un servidor remoto
    constructor(private _http : Http){ }
    PHP_API_SERVER = "http://localhost/api/angular/juego";

    //Obteniendo una lista de tipo juego 
    getAll(): Observable<Juego[]>{
        return this._http.get(this.PHP_API_SERVER).pipe(map((res: Response) => res.json()))
    }
          
    crearJuego(juego: Juego): Observable<Juego>{
        let formData : FormData = new FormData();
        formData.append('titulo', juego.titulo);
        formData.append('compania', juego.compania);
        formData.append('genero', juego.genero);
        formData.append('fecha_lanzamiento', juego.fecha_lanzamiento);
        let cabecera = new Headers({'Content-Type': 'application/json'});
        let opciones = new RequestOptions({headers: cabecera});
        return this._http.post(this.PHP_API_SERVER, formData).pipe(map((res: Response) => res.json()));
    }

    deleteJuego(id: number) : Observable<number>{
        let cabecera = new Headers({'Content-Type': 'application/json'});
        let opciones = new RequestOptions({headers: cabecera});
        console.log(`${this.PHP_API_SERVER}/${id}`);
        return this._http.delete(`${this.PHP_API_SERVER}/${id}`, opciones).pipe(map((res: Response) => res.json()));
    }

    getById(id: number) : Observable<Juego>{
        return this._http.get(`${this.PHP_API_SERVER}/${id}`).pipe(map((res: Response) => res.json()));
    }

    update(juego: Juego) : Observable<Juego>{
        let cabecera = new Headers({'Content-Type': 'application/json'});
        let opciones = new RequestOptions({headers: cabecera});
        return this._http.put(`${this.PHP_API_SERVER}/${juego.id}`,opciones).pipe(map((res: Response) => res.json()));
    }

}