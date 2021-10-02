import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeRoutes } from './home/home.routing';

// import 


const routes: Routes = [];

@NgModule({
	imports: [
		RouterModule.forChild(routes),
		// Routes de los modulos 
		// PagesRoutes,
		HomeRoutes
	],
	exports: [RouterModule]
})


export class ModulosRoutes {}
