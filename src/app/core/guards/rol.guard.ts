import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { tap } from 'rxjs/operators';

// servicios 
import { UsuarioService } from '../services/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class RolGuard implements CanActivate {

    constructor(
        private usuarioService: UsuarioService,
        private router: Router
    ) { }


  canActivate(
    route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
  ) {


    return this.usuarioService.validarRoles()
    .pipe(
      tap( es => {
        if (!es) {
          console.log(es);
          
          this.router.navigateByUrl('/dashboard');
        }
      })
    );
  }
  
}
