import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';

const url_base_cursos = environment.base_url_cursos;
const url_base_user = environment.base_url_perfiles;

@Pipe({
  name: 'noimagen'
})
export class NoimagenPipe implements PipeTransform {

  transform(url: any, id: any, type:string): string {
    
    if (type == 'c') {
      if ( url == false ) {
        return `${url_base_cursos}/no-imagen.png`;
      }
  
      if ( url ) {
          return `${url_base_cursos}/${id}/${url}`; 
      } else {
        return `${url_base_cursos}/no-image.png`;
      }
      

    } else if (type == 'u') {

      if ( url == false ) {
        return `${url_base_user}/no-imagen.png`;
      }
  
      if ( url ) {
          return `${url_base_user}/${id}/${url}`; 
      } else {
        return `${url_base_user}/no-image.png`;
      }

    } 
  }

}
