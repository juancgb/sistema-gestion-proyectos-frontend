import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
/** Las rutas */
import { ProcesosRoutes } from './routes';
/** Views */
import { ProcesosComponent } from './procesos.component';
import { ProcesosListaComponent } from './procesos-lista/procesos-lista.component';

const routes: Routes = [
    { 
        path:  '',
        component: ProcesosComponent, 
        children: [
            { path: '', component: ProcesosListaComponent }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class ProcesosRoutingModule {
}
