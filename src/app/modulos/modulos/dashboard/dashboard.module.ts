import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// modulos
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SlickCarouselModule } from 'ngx-slick-carousel';

import * as fromComponents from './component';
import { SharedModule } from 'src/app/shared.component/shared.module';
import { SharedPipesModule } from 'src/app/shared.pipes/shared.pipes.module';

@NgModule({
  declarations: [
    ...fromComponents.components,
  ],
  exports: [
    ...fromComponents.components,
  ],
  imports: [
    SharedPipesModule.forRoot(), 
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    SlickCarouselModule
  ]
  
})
export class DashboardModule { }
