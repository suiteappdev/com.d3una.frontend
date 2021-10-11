import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule  } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/core/services/usuario.service';
import Swal from 'sweetalert2';

// servicios 


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {


  public formSubmitted = false;
  
  public loginForm = this.fb.group(
    {
      email: [ localStorage.getItem('email') || '' , [ Validators.required, Validators.email ]],
      password: ['', [ Validators.required, Validators.minLength(8) ]],
      // remember: [ false ]
    }
  );


  constructor(
    private router: Router, 
    private fb: FormBuilder,
    private usuarioService: UsuarioService
  ) { }

 

  login(){
    
    this.formSubmitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    //Realizar el posteo
    this.usuarioService.login(this.loginForm.value)
    .subscribe(resp => {
        console.log(resp);
      })

  }

  campoNoValido(campo: string): boolean {
    if (this.loginForm.get(campo).invalid && this.formSubmitted) {
      return true;
    } else{
      return false;
    }
  }


  
}
