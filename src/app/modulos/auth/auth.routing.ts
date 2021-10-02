import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import 
import { LoginComponent } from './components/login/login.component';
import { RecoveryComponent } from './components/recovery/recovery.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetComponent } from './components/reset/reset.component';
import { VerificacionComponent } from './components/verificacion/verificacion.component';



const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  {path:'recovery', component: RecoveryComponent},
  {path:'verificacion/:email', component: VerificacionComponent},
  {path:'reset', component: ResetComponent},
];

@NgModule({
	imports: [
		RouterModule.forChild(routes),
	],
	exports: [RouterModule]
})


export class AuthRoutes {}
