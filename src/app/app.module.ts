import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


//modulos
import { AppRoutingModule } from './app.routing.module';

// Declaraciones
import { AppComponent } from './app.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { ModulosModule } from './modulos/modulos/modulos.module';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { SharedModule } from './shared.component/shared.module';


//Pipes


@NgModule({
  declarations: [	
    AppComponent,
    NopagefoundComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    ModulosModule,
    CommonModule,
    FormsModule, 
    SlickCarouselModule,
    ReactiveFormsModule 
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
