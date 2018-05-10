import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRouterModule } from './modulos/router/router.module';
import { ComponentesModule } from './modulos/componentes/componentes.module';

import { NavbarComponent } from './componentes/dashboard/navbar/navbar.component';
import { FootbarComponent } from './componentes/dashboard/footbar/footbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FootbarComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    ComponentesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
