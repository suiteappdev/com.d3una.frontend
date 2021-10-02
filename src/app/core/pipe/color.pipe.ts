import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'color'
})
export class ColorPipe implements PipeTransform {

  transform(value: string,): string {

    // if ( value != '' ) {
    //  if ()
    // }
    return null;
  }

}
