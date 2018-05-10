import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from '../../componentes/inicio/inicio.component';
import { UsuarioConfigComponent } from '../../componentes/usuarios/usuario-config/usuario-config.component';
import { ProcesosIndexComponent } from '../../componentes/procesos/procesos-index/procesos-index.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    InicioComponent,
    UsuarioConfigComponent,
    ProcesosIndexComponent
  ],
  exports: [
    InicioComponent,
    UsuarioConfigComponent,
    ProcesosIndexComponent
  ]
})
export class ComponentesModule { }
