import { Component } from '@angular/core';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: [
  ]
})
export class FooterComponent {

  menuItems: any[];
  redItems :any[];

  year = Date();

  constructor(

  ) {

  }

}
