import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'higherlower'
})
export class HigherlowerPipe implements PipeTransform {

  transform(value: string): string {

    value = value.toLowerCase();

    let parrafo = value.split(" ");
  
    parrafo[0] = parrafo[0][0].toUpperCase() + parrafo[0].substr(1);
       
    return parrafo.join(" ");
  }

}
