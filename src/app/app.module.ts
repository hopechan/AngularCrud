import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//nueva importacion
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JuegoCreateComponent } from './juego-create/juego-create.component';
import { JuegoReadComponent } from './juego-read/juego-read.component';
import { JuegoUpdateComponent } from './juego-update/juego-update.component';
import { JuegoDeleteComponent } from './juego-delete/juego-delete.component';
import { JuegoDetalleComponent } from './juego-detalle/juego-detalle.component';
import { JuegoService } from './juego.service';

@NgModule({
  declarations: [
    AppComponent,
    JuegoCreateComponent,
    JuegoReadComponent,
    JuegoUpdateComponent,
    JuegoDeleteComponent,
    JuegoDetalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //Nuevo import
    HttpModule ,
    FormsModule,
    ReactiveFormsModule
  ],
  //se agrega el servicio en providers 
  providers: [JuegoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
