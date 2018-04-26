import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BasicRoutes } from './basics/routes';
import { DashboardComponent } from './basics/dashboard/dashboard.component';
import { ConfiguracionesComponent } from './basics/configuraciones/configuraciones.component';
import { CierreSesionComponent } from './basics/cierre-sesion/cierre-sesion.component';
import { ProcesosRoutes } from './procesos/routes';

const routes: Routes = [
    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: BasicRoutes.home.path, component: DashboardComponent },
    { path: BasicRoutes.configuraciones.path, component: ConfiguracionesComponent },
    { path: BasicRoutes.cierre_sesion.path, component: CierreSesionComponent },
    { path: ProcesosRoutes.procesos.path, loadChildren: 'app/procesos/procesos.module#ProcesosModule' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {
}
