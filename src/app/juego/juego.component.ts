import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { Observable } from "rxjs";
import { JuegoService } from "../juego.service";
import { Juego } from "../juego";

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.css']
})
export class JuegoComponent implements OnInit {
  dataSaved = false;
  formJuego : any;
  allJuegos : Observable<Juego[]>;
  idJuego : null;
  mensaje = null;


  constructor(private formbulider: FormBuilder, private juegoService: JuegoService) { }
  
  ngOnInit() {
    this.formJuego = this.formbulider.group({
      titulo : ['', [Validators.required]],
      fecha : ['', [Validators.required]],
      compania : ['', [Validators.required]],
      genero : ['', [Validators.required]]
    });
    this.mostrarJuegos();
  }

  mostrarJuegos(){
    this.allJuegos = this.juegoService.getAll();
  }

  onSubmit(){
    this.dataSaved = false;
    const juego = this.formJuego.value;
    this.crearJuego(juego);
    this.formJuego.reset();
  }

  editar(id : string){

  }

  borrar(id: string){
    if (confirm("¿Esta seguro de borrar el registro?")) {   
      console.log(id);
      
      this.juegoService.deleteJuego(id).subscribe(() => {  
        this.dataSaved = true;  
        this.mensaje = 'Registro Borrado';  
        this.mostrarJuegos();  
        this.idJuego = null;  
        this.formJuego.reset();  
    
      });  
    }  
  }

  crearJuego(juego: Juego){
    if (this.idJuego == null) {
      this.juegoService.crearJuego(juego).subscribe(() =>{
        this.dataSaved = true;
        this.mensaje = "Registro Guardado";
        this.mostrarJuegos();
        this.idJuego = null;
        this.formJuego.reset();
      });
    } else {
      juego.id = this.idJuego;
    }
  }

  resetForm(){
    this.formJuego.reset();
    this.mensaje = null;
    this.dataSaved = false;
  }

}
