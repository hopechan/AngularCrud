import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


//se agregan las rutas al objeto ruoutes
//se coloca un nombre amigable
const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
