import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//nueva importacion
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatButtonModule, MatMenuModule, MatDatepickerModule, MatNativeDateModule,
        MatInputModule, MatToolbarModule, MatTooltipModule, MatIconModule, 
        MatCardModule, MatSidenavModule, MatFormFieldModule} from "@angular/material";
import { MatRadioModule } from "@angular/material/radio";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { JuegoService } from './juego.service';
import { HttpClientModule } from '@angular/common/http';
import { JuegoComponent } from './juego/juego.component';

@NgModule({
  declarations: [
    AppComponent,
    JuegoComponent,
  ],
  imports: [
    BrowserModule,  
    FormsModule,  
    ReactiveFormsModule,  
    HttpClientModule,  
    HttpModule,
    BrowserAnimationsModule,  
    MatButtonModule,  
    MatMenuModule,  
    MatDatepickerModule,  
    MatNativeDateModule,  
    MatIconModule,  
    MatRadioModule,  
    MatCardModule,  
    MatSidenavModule,  
    MatFormFieldModule,  
    MatInputModule,  
    MatTooltipModule,  
    MatToolbarModule,
    AppRoutingModule  
  ],
  //se agrega el servicio en providers 
  providers: [JuegoService, HttpClientModule, MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
