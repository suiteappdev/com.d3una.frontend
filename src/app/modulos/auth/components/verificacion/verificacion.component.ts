import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-verificacion',
  templateUrl: './verificacion.component.html'
})
  
export class VerificacionComponent implements OnInit {


  // public email: any;
  // public formSubmitted = false;
  // public passCodeForm;

  constructor(
    private ar: ActivatedRoute,
    private router: Router, 
    private fb: FormBuilder,
    // private recoveryServices: RecoveryService
  ) { }

  ngOnInit() {
    // this.email = this.ar.snapshot.paramMap.get('email');

    // this.passCodeForm = this.fb.group(
    //   {
    //     password_code: [ '' , [ Validators.required, Validators.minLength(5), Validators.maxLength(6) ]],   
    //     email: [ this.email , [ Validators.required, Validators.email ]],   
    //   }
    // );

  }

  // verificacionCodigo() {
  //   this.formSubmitted = true;

  //   if (this.passCodeForm.invalid) {
  //     return;
  //   }

  //   //Realizar el posteo
  //   this.recoveryServices.verificarCodigo(this.passCodeForm.value)
  //     .subscribe(resp => {
  //       if (resp == true) {
  //         Swal.fire('Exito', 'codigo verificado, puede proceder a cambiar la contraseña', 'success');
  //         this.router.navigateByUrl('/reset');
  //       } else {
  //           Swal.fire('Error', 'el codigo no es valido', 'error');
  //       }        
  //   })
  // }

  // campoNoValido(campo: string): boolean {
  //   if (this.passCodeForm.get(campo).invalid && this.formSubmitted) {
  //     return true;
  //   } else{
  //     return false;
  //   }
  // }
}
