import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


// Declaraciones
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';


// import 
import { SharedPipesModule } from '../shared.pipes/shared.pipes.module';
import { AuthModule } from '../modulos/auth/auth.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    BreadcrumbsComponent,
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    BreadcrumbsComponent,
  ],
  imports: [
    SharedPipesModule.forRoot(),
    CommonModule,
    AuthModule,
    RouterModule,
    FormsModule
  ]
})

export class SharedModule { }
