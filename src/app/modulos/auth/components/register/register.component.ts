import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/core/services/usuario.service';
import Swal from 'sweetalert2'

// Servicie import 


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css' ]
})
export class RegisterComponent  {
  


  public formSubmitted = false;
  
  public registerForm = this.fb.group(
    {
      name: ['', [ Validators.required, Validators.minLength(3) ]],
      email: ['', [ Validators.required, Validators.email ]],
      password: ['', [ Validators.required, Validators.minLength(8) ]],
      // password2: ['', [ Validators.required, Validators.minLength(8), this.passwordsAreEquals ]],
      // termino: [ false , [ Validators.required ]],
    }
  );


  constructor(
    private router: Router, 
    private fb: FormBuilder,
    private usuarioService: UsuarioService
  ) {}


  registroCreated() {
    
    this.formSubmitted = true;

    if (this.registerForm.invalid) {
      return;
    }

    // // //Realizar el posteo
    // this.usuarioService.registroUsuario(this.registerForm.value)
    //   .subscribe( resp => {

    //     console.log(resp);
        
    //     // if (resp.success) {
    //     //   Swal.fire('Listo', 'dentro del sistema', 'success');
    //     //   // this.router.navigateByUrl('/dashboard');
    //     // }else{
    //     //   Swal.fire('Error', resp.error, 'error');
    //     // }
        
    // }, (err) => {
    //     Swal.fire('Error', err, 'error');
    //   });
    
  }
  
  // campoNoValido(campo: string): boolean {
  //   // if (this.registerForm.get(campo).invalid && this.formSubmitted) {
  //   //   return true;
  //   // } else{
  //   //   return false;
  //   // }
  // }

  aceptaTerminos(){
    // return !this.registerForm.get('termino').value && this.formSubmitted;
  }

  passNoValidas() {
    
    // const pass1 = this.registerForm.get('password').value;
    // const pass2 = this.registerForm.get('password2').value;

    // if ( (pass1 === pass2) && this.formSubmitted) {
    //   return false;
    // } else {
    //   return true;
    // }

  }

  passwordsAreEquals(control: AbstractControl): ValidationErrors | null {
    const pass1 = control.parent?.get('password').value;
    const pass2 = control.value;
 
    return !pass1 || !pass2 || pass1 !== pass2 ? { isNotEqual: true } : null;
  }
  
}
