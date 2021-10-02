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
// import { MenuCategoriaComponent } from '../modulos/modulos/components/menuCategoria/menuCategoria.component';
// import { CanastaComponent } from '../modulos/modulos/components/canasta/canasta.component';
// import { MenuPerfilComponent } from '../modulos/modulos/components/menuPerfil/menuPerfil.component';
// import { AlertsComponent } from '../modulos/modulos/components/alerts/alerts.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    BreadcrumbsComponent,
    // MenuCategoriaComponent,
    // CanastaComponent,
    // MenuPerfilComponent,
    // AlertsComponent
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    BreadcrumbsComponent,
    // MenuCategoriaComponent,
    // CanastaComponent,
    // MenuPerfilComponent,
    // AlertsComponent
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
