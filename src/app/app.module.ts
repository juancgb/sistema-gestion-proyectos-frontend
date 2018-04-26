import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
/** Modulos */
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';

/** Paginas */
import { ProcesosComponent } from './procesos/procesos.component';

@NgModule({
  declarations: [
    AppComponent,
    ProcesosComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
