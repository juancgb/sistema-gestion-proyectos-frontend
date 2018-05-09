import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from '../../componentes/inicio/inicio.component';
import { ProcesosIndexComponent } from '../../componentes/procesos/procesos-index/procesos-index.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    InicioComponent,
    ProcesosIndexComponent
  ],
  exports: [
    InicioComponent,
    ProcesosIndexComponent
  ]
})
export class ComponentesModule { }
