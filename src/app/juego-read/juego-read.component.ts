import { Component, OnInit, Output } from '@angular/core';
import { JuegoService } from "../juego.service"; //clase que maneja el acceso a la API
import { Observable } from "rxjs";
import { Juego } from "../juego";//clase que posee las propiedades de la entidad
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-juego-read',
  templateUrl: './juego-read.component.html',
  styleUrls: ['./juego-read.component.css'],
  providers: [JuegoService] //De esta forma se limita el alcanze de JuegoService, este se limita solo a este componente
})
export class JuegoReadComponent implements OnInit {
  //Lista donde se almacenaran los datos
  @Output() mostrar_crear_juego_event = new EventEmitter();
  juegos: Juego[];

  //se inicializa JuegoService 
  constructor(private juegoService: JuegoService) { }

  //metodos

  //cuando el usuario de clic en el boton "Nuevo"
  crearJuego(){
    this.mostrar_crear_juego_event.emit({
      title: "Create Product"
  });
  }
  detalle(id: number){}
  actualizarJuego(id: number){}
  borrar(id: number){}

  ngOnInit() {
   this.juegoService.readJuegos().subscribe((juegos: Juego[]) => {
     this.juegos = juegos;
     //console.log(this.juegos);
     
   })
  }
}
