import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, Form } from "@angular/forms";
import {  JuegoService } from "../juego.service";
import { Observable } from "rxjs";
import { Juego } from "../juego";

@Component({
  selector: 'app-juego-create',
  templateUrl: './juego-create.component.html',
  styleUrls: ['./juego-create.component.css'],
  providers: [JuegoService]
})

export class JuegoCreateComponent {

  //componente para crear un nuevo registro
  crear_juego_form : FormGroup;

  //@Output le comunica al componente padre (AppComponent) que un evento ha sucedido
  @Output() mostrar_juegos_event = new EventEmitter();
  constructor(private juegoService : JuegoService, private formBuilder: FormBuilder) { 
    this.crear_juego_form = formBuilder.group({
      titulo : ["", Validators.required],
      compania : ["", Validators.required],
      genero : ["", Validators.required],
      fecha_lanzamiento : ["", Validators.required]
    });
  }

  crearJuego(){
    this.juegoService.crearJuego(this.crear_juego_form.value)
        .subscribe(
          juego => {
            console.log(juego);
            this.readJuegos();
          }
        );
  }

  readJuegos(){
    this.mostrar_juegos_event.emit({title: 'Ver Juegos'});
  }

  ngOnInit() {
  }

}
