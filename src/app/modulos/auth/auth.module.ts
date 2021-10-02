import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


// Declaraciones e importaciones 

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { RecoveryComponent } from './components/recovery/recovery.component';
import { ResetComponent } from './components/reset/reset.component';
import { VerificacionComponent } from './components/verificacion/verificacion.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';

// import { SharedModule } from 'src/app/shared.component/shared.module';


@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    RecoveryComponent,
    ResetComponent,
    VerificacionComponent
  ],
  exports: [
    RegisterComponent,
    LoginComponent,
  ],
  imports: [
    // SharedModule, 
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    SlickCarouselModule
  ]
})
export class AuthModule { }
