import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


// import { AuthGuard } from '../../core/guards/auth.guard';

// Routas 
import { ModulosComponent } from '../modulos.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';




const routes: Routes = [
	{ 
		path: 'dashboard',
		component: ModulosComponent,
		// canActivate: [AuthGuard],
		children: [
		  {path:'', component: DashboardComponent}
		]
	},
];



@NgModule({
	imports: [
    RouterModule.forChild(routes),
  ],
	exports: [RouterModule]
})


export class DashboardRoutes {}