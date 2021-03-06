import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as fromComponents from './component';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@NgModule({
  imports: [
    CommonModule,
    SlickCarouselModule
  ],
  declarations: [
    ...fromComponents.components,
  ]
})
export class HomeModule { }
