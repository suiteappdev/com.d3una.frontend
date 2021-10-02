import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'urlsegura'
})
export class UrlseguraPipe implements PipeTransform {

  transform(value: any, id_curso: string, id_recurso:string): any {

    if (value == 'cursos') {
      // /curso/12312sdsdf/learn/lecture/ec31b731-21cb-4cd3-b0da-735879a2c9f5
      var url = `/curso/${id_curso}/learn/lecture/${id_recurso}`;
    }
    
    return url;
  }

}
