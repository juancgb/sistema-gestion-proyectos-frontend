import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

/** Views */
import { DashboardComponent } from './dashboard/dashboard.component';
import { ConfiguracionesComponent } from './configuraciones/configuraciones.component';
import { CierreSesionComponent } from './cierre-sesion/cierre-sesion.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        DashboardComponent,
        ConfiguracionesComponent,
        CierreSesionComponent
    ],
    declarations: [
        DashboardComponent,
        ConfiguracionesComponent,
        CierreSesionComponent
    ]
})
export class BasicsModule { }
