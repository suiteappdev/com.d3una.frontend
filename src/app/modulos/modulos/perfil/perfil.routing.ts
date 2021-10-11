import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModulosComponent } from '../modulos.component';

import { PerfilComponent } from './components';

const routes: Routes = [
  { 
		path: 'perfil',
		component: ModulosComponent,
		// canActivate: [AuthGuard],
		children: [
		  {path:'', component: PerfilComponent}
		]
	},
];

@NgModule({
	imports: [
    RouterModule.forChild(routes),
  ],
	exports: [RouterModule]
})


export class PerfilRoutes { }

