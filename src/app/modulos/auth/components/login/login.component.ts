import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule  } from '@angular/forms';
import { Router } from '@angular/router';
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
      remember: [ false ]
    }
  );


  constructor(
    private router: Router, 
    private fb: FormBuilder,
  ) { }

  slides = [
    {img: "http://placehold.it/350x150/000000"},
    {img: "http://placehold.it/350x150/111111"},
    {img: "http://placehold.it/350x150/333333"},
    {img: "http://placehold.it/350x150/666666"}
  ];
  slideConfig = {"slidesToShow": 4, "slidesToScroll": 4};
  
  addSlide() {
    this.slides.push({img: "http://placehold.it/350x150/777777"})
  }
  
  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }
  
  slickInit(e) {
    console.log('slick initialized');
  }
  
  breakpoint(e) {
    console.log('breakpoint');
  }
  
  afterChange(e) {
    console.log('afterChange');
  }
  
  beforeChange(e) {
    console.log('beforeChange');
  }

  // login(){

  //   this.formSubmitted = true;

  //   if (this.loginForm.invalid) {
  //     return;
  //   }

  //    //Realizar el posteo
  //   this.usuarioService.login(this.loginForm.value)
  //   .subscribe(resp => {

  //       if( this.loginForm.get('remember').value ){
  //         localStorage.setItem('email', this.loginForm.get('email').value )
  //       }else{
  //         localStorage.setItem('email', '')
  //       }

  //       if (resp.success) {
  //         this.router.navigateByUrl('/dashboard');
  //       } else if(resp.error.email){
  //         Swal.fire('Error', 'El email no se encuentra registrado', 'error'); 
  //       } else {          
  //         Swal.fire('Error', resp.error, 'error');
  //       }

  //     })
  // }

  // campoNoValido(campo: string): boolean {
  //   if (this.loginForm.get(campo).invalid && this.formSubmitted) {
  //     return true;
  //   } else{
  //     return false;
  //   }
  // }


  // logingoogle(){

  //   this.usuarioService.logingoogle('google').subscribe(resp =>{

  //   })
  // }

  
}
