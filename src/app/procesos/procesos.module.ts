import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
/** Routing */
import { ProcesosRoutingModule } from './procesos-routing.module';
/** Views */
import { ProcesosComponent } from './procesos.component';
import { ProcesosListaComponent } from './procesos-lista/procesos-lista.component';

@NgModule({
  imports: [
    CommonModule,
    ProcesosRoutingModule
  ],
  declarations: [
    ProcesosComponent,
    ProcesosListaComponent
  ]
})
export class ProcesosModule { }
