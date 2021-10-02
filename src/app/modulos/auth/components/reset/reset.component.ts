import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html'
})
export class ResetComponent implements OnInit {

  // public informacion: VerificacionCode;
  // public emails: string;
  // public codigo: string;

  // public formSubmitted = false;
  
  // public passForm;

  constructor(
    // private router: Router, 
    // private fb: FormBuilder,
    // private recoveryServices: RecoveryService
  ) {
    // this.informacion = this.recoveryServices.verify;

    // this.emails = this.informacion.emails;
    // this.codigo = this.informacion.codigo;

    // this.passForm = this.fb.group(
    //   {
    //     email: [ this.emails  , [Validators.required, Validators.email]],
    //     password: ['', [Validators.required, Validators.minLength(8)]],
    //     password2: ['', [Validators.required, Validators.minLength(8), this.passwordsAreEquals]],
    //     password_code: [ this.codigo, [Validators.required]],
    //   });
  }

  ngOnInit() {
  }

  // cambiarPassword() {
  //   this.formSubmitted = true;

  //   if (this.passForm.invalid) {
  //     return;
  //   }

  //   this.recoveryServices.passwordReset(this.passForm.value)
  //     .subscribe(
  //       resp => {
  //         if(resp.success){
  //           Swal.fire('Exitó', resp.success, 'success');
  //           this.router.navigateByUrl('/login');
  //         }else{
  //           Swal.fire('Error', resp.error, 'error');
  //         }
  //     }
  //   )
  // }


  // campoNoValido(campo: string): boolean {
  //   if (this.passForm.get(campo).invalid && this.formSubmitted) {
  //     return true;
  //   } else{
  //     return false;
  //   }
  // }

  // passNoValidas() {
    
  //   const pass1 = this.passForm.get('password').value;
  //   const pass2 = this.passForm.get('password2').value;

  //   if ( (pass1 === pass2) && this.formSubmitted) {
  //     return false;
  //   } else {
  //     return true;
  //   }

  // }

  // passwordsAreEquals(control: AbstractControl): ValidationErrors | null {
  //   const pass1 = control.parent?.get('password').value;
  //   const pass2 = control.value;
 
  //   return !pass1 || !pass2 || pass1 !== pass2 ? { isNotEqual: true } : null;
  // }
}
