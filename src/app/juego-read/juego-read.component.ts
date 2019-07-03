import { Component, OnInit } from '@angular/core';
import { JuegoService } from "../juego.service"; //clase que maneja el acceso a la API
import { Observable } from "rxjs";
import { Juego } from "../juego";//clase que posee las propiedades de la entidad

@Component({
  selector: 'app-juego-read',
  templateUrl: './juego-read.component.html',
  styleUrls: ['./juego-read.component.css'],
  providers: [JuegoService] //De esta forma se limita el alcanze de JuegoService, este se limita solo a este componente
})
export class JuegoReadComponent implements OnInit {
  //Lista donde se almacenaran los datos
  juegos: Juego[];

  //se inicializa JuegoService 
  constructor(private juegoService: JuegoService) { }

  //metodos
  crearJuego(){}
  detalle(id: number){}
  actualizarJuego(id: number){}
  borrar(id: number){}

  ngOnInit() {
    /*
    this.juegoService.readJuegos()
        .subscribe(juegos => 
            this.juegos = this.juegos['result']
        );
    */
   this.juegoService.readJuegos().subscribe((juegos: Juego[]) => {
     this.juegos = juegos;
     //console.log(this.juegos);
     
   })
  }
}
