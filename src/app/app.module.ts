import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JuegoCreateComponent } from './juego-create/juego-create.component';
import { JuegoReadComponent } from './juego-read/juego-read.component';
import { JuegoUpdateComponent } from './juego-update/juego-update.component';
import { JuegoDeleteComponent } from './juego-delete/juego-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    JuegoCreateComponent,
    JuegoReadComponent,
    JuegoUpdateComponent,
    JuegoDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
