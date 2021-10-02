import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModulosComponent } from '../modulos.component';

import { HomeComponent } from './component/home/home.component';

const routes: Routes = [
	{ 
		path: '',
		component: ModulosComponent,
		// canActivate: [AuthGuard],
		children: [
		  {path:'', component: HomeComponent}
		]
	},
];

@NgModule({
	imports: [
    RouterModule.forChild(routes),
  ],
	exports: [RouterModule]
})


export class HomeRoutes { }