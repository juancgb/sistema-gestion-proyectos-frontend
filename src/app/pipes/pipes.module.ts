import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapitalizePipe } from './capitalize/capitalize.pipe';
import { StatusPipe } from './status/status.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CapitalizePipe,
    StatusPipe
  ],
  exports: [
    CapitalizePipe,
    StatusPipe
  ]
})
export class PipesModule { }
