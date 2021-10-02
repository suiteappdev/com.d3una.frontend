import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'domseguro'
})
export class DomseguroPipe implements PipeTransform {

  constructor(
    private domSanitizer: DomSanitizer
  ) { }

  transform(value: string): any {
 
    let parrafo = value.split("/");
    
    if (parrafo[2] == 'drive.google.com') {
      var clave = parrafo[5]
      var url = `https://drive.google.com/file/d/${clave}/preview`;
    } else if (parrafo[2] == 'www.youtube.com') {
      var p = parrafo[3].split("=");
      var clave = p[1];
      var url = `https://www.youtube.com/embed/${clave}`;
    }

    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
    
  }

}
