import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

// import { RecoveryService } from 'src/app/core/services/recovery.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-recovery',
  templateUrl: './recovery.component.html'
})
export class RecoveryComponent implements OnInit {


  public formSubmitted = false;
  public emailForm = this.fb.group(
    {
      email: ['', [ Validators.required, Validators.email ]],   
    }
  );

  constructor(
    private router: Router, 
    private fb: FormBuilder,
    // private recoveryServices: RecoveryService
  ) { }

  ngOnInit() {
  }



  // emailMsg() {
    
  //   this.formSubmitted = true;

  //   if (this.emailForm.invalid) {
  //     return;
  //   }

  //   //Realizar el posteo
  //   this.recoveryServices.mail(this.emailForm.value)
  //     .subscribe( resp => {
  //       const { email } = this.emailForm.value;
  //       if(resp.success){
  //         Swal.fire('Exito', resp.success, 'success');
  //         this.router.navigate( ['/verificacion', email] );
  //       }else{
  //         Swal.fire('Error', resp.error, 'error');
  //       }
        
  //   }, (err) => {
  //       Swal.fire('Error', err, 'error');
  //   });
    
  // }

  // campoNoValido(campo: string): boolean {
  //   if (this.emailForm.get(campo).invalid && this.formSubmitted) {
  //     return true;
  //   } else{
  //     return false;
  //   }
  // }



}
