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
}
