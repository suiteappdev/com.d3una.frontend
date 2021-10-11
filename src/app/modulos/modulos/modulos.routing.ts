import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeRoutes } from './home/home.routing';
import { PerfilRoutes } from './perfil/perfil.routing';

// import 


const routes: Routes = [];

@NgModule({
	imports: [
		RouterModule.forChild(routes),
		HomeRoutes,
		PerfilRoutes
	],
	exports: [RouterModule]
})


export class ModulosRoutes {}
