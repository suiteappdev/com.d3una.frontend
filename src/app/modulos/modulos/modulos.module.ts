import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// Modulos
import { SharedPipesModule } from 'src/app/shared.pipes/shared.pipes.module';
// import { SharedModule } from 'src/app/shared.component/shared.module';


// Componentes
import { ModulosComponent } from './modulos.component';
import { HomeModule } from './home/home.module';
import { SlickCarouselModule } from 'ngx-slick-carousel';
// import { DashboardModule } from './dashboard/dashboard.module';



@NgModule({  
  declarations: [
    ModulosComponent,
  ],
  exports: [
    ModulosComponent,
  ],
  imports: [
    SharedPipesModule.forRoot(),
    // SharedModule,
    SlickCarouselModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
    HomeModule
    // DashboardModule,
  ]
})


export class ModulosModule { }