
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { NopagefoundComponent } from './nopagefound/nopagefound.component';

import { AuthRoutes } from './modulos/auth/auth.routing';
import { ModulosRoutes } from './modulos/modulos/modulos.routing';



const routes: Routes = [
  // {path:'**', component:NopagefoundComponent},
  {path:'', redirectTo:'/', pathMatch:'full'},
];

@NgModule({
	imports: [
    RouterModule.forRoot(routes),
    // ModulosModule,
    ModulosRoutes,
    AuthRoutes
	],
	exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }