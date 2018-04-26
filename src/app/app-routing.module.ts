import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BasicRoutes } from './basics/routes';
import { DashboardComponent } from './basics/dashboard/dashboard.component';
import { ConfiguracionesComponent } from './basics/configuraciones/configuraciones.component';
import { CierreSesionComponent } from './basics/cierre-sesion/cierre-sesion.component';
import { ProcesosComponent } from './procesos/procesos.component';

const routes: Routes = [
    // el que redirecciona al home
    { path: '', redirectTo: '/', pathMatch: 'full' },
    // el verdadero home
    { path: BasicRoutes.home.path, component: DashboardComponent },
    { path: BasicRoutes.configuraciones.path, component: ConfiguracionesComponent },
    { path: BasicRoutes.cierre_sesion.path, component: CierreSesionComponent },
    // el machete --
    { path: 'procesos', component: ProcesosComponent }
];

@NgModule({
    declarations: [
        DashboardComponent,
        ConfiguracionesComponent,
        CierreSesionComponent
    ],
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {
}
