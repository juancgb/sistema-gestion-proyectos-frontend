import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
/** views */
import { InicioComponent } from '../../componentes/inicio/inicio.component';
import { UsuarioConfigComponent } from '../../componentes/usuarios/usuario-config/usuario-config.component';
import { ProcesosIndexComponent } from '../../componentes/procesos/procesos-index/procesos-index.component';

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'procesos', component: ProcesosIndexComponent },
  { path: 'usuarios', component: UsuarioConfigComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouterModule { }
