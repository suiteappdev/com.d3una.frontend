import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { catchError, map, tap } from "rxjs/operators";

// interfaces 
import { loginForm } from '../interfaces/login.form.interfaces';
import { RegisterForm } from '../interfaces/register.form.interfaces';

// Constante 
import { environment } from '../../../environments/environment';
import { Observable, of } from 'rxjs';

// models

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})

export class UsuarioService {

  // public usuario: Usuario;
  // public roles: Roles;  
  constructor(
    private http: HttpClient
  )
  { }

  get token(): string {
    return localStorage.getItem('token') || '';
  }

  logout() {
    localStorage.removeItem('token');
  }



 

  // Metodo para crear usuario ó Registro de usuario
  crearUsuario( formData: RegisterForm ){

    return this.http.post(`${base_url}/user/create`, formData,
    {
          headers: {
            'Accept': 'application/json'
          }
    })
    .pipe(
      tap( ( resp:any ) => {
        localStorage.setItem( 'token', resp.token )
      })
    );

  }

  //metodo para loguearse
  login(formData: loginForm) {
    
    const url = `http://127.0.0.1:3333/login`;
    // const url = `${base_url}/login`;

    return this.http.post(url, formData,
      {
        headers: {
          "accept": "application/json",
        }
      }
    )
    .pipe(
      tap((resp: any) => {
        console.log(resp);
        
        // localStorage.setItem( 'token', resp.token )
      })
    );
  }

 
}
