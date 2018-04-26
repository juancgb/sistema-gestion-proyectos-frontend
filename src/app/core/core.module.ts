import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

/** Views */
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { StatusBarComponent } from './status-bar/status-bar.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavBarComponent,
    StatusBarComponent
  ],
  declarations: [
    NavBarComponent,
    StatusBarComponent
  ]
})
export class CoreModule { }
