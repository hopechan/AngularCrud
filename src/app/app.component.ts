import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //propiedades para componentes hijos
  title = 'Juegos';
  juego_id;

  //propiedades usadas para identificar que vista usar
  mostrar_juegos_html = true;
  mostrar_crear_juego_html = false;
  mostrar_detalle_juego_html = false;
  mostrar_actualizar_juego_html = false;
  mostrar_borrar_jeugo_html = false;

  mostrarCrearJuego($event){
    this.title = $event.title;
    this.ocultarVistas();
    this.mostrar_crear_juego_html = true;
  }

  mostrarJuegos($event){
    this.title = $event.title;
    this.ocultarVistas();
    this.mostrar_juegos_html = true;
  }

  ocultarVistas(){
    this.mostrar_juegos_html = false;
    this.mostrar_crear_juego_html = false;
    this.mostrar_detalle_juego_html = false;
    this.mostrar_actualizar_juego_html = false;
    this.mostrar_borrar_jeugo_html = false;
  }

}
