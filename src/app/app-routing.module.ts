import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//imports de los componentes
import {JuegoCreateComponent} from './juego-create/juego-create.component'; 
import { JuegoReadComponent } from "./juego-read/juego-read.component";
import { JuegoUpdateComponent } from "./juego-update/juego-update.component";
import { JuegoDetalleComponent } from "./juego-detalle/juego-detalle.component";
import { JuegoDeleteComponent } from "./juego-delete/juego-delete.component";

//se agregan las rutas al objeto ruoutes
//se coloca un nombre amigable
const routes: Routes = [
  {
    path: 'juego/crear',  //ruta para crear un registro
    component: JuegoCreateComponent
  },
  {
    path: 'juego/', //ruta para ver todos los registros
    component: JuegoReadComponent
  },
  {
    path: 'juego/:id', //ruta para editar un registro
    component: JuegoUpdateComponent
  },
  {
    path: 'juego/detalle/:id',
    component: JuegoDetalleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
