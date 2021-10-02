import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoimagenPipe } from '../core/pipe/noimagen.pipe';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { HigherlowerPipe } from '../core/pipe/higherlower.pipe';
import { DomseguroPipe } from '../core/pipe/domseguro.pipe';
import { UrlseguraPipe } from '../core/pipe/urlsegura.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NoimagenPipe,
    HigherlowerPipe,
    DomseguroPipe,
    UrlseguraPipe
  ],
  exports: [
    NoimagenPipe,
    HigherlowerPipe,
    DomseguroPipe,
    UrlseguraPipe
  ]
})
  
export class SharedPipesModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedPipesModule,
      providers: [
      ]
    };
  }
}
