import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
/** Paginas */
import { ProgresoComponent } from './progreso/progreso.component';
import { ConfiguracionesComponent } from './configuraciones/configuraciones.component';
import { CierreSesionComponent } from './cierre-sesion/cierre-sesion.component';

const routes: Routes = [
  { path: '', redirectTo: '/progreso', pathMatch: 'full' },
  { path: 'cierresesion', component: CierreSesionComponent },
  { path: 'progreso', component: ProgresoComponent },
  { path: 'configuraciones', component: ConfiguracionesComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ProgresoComponent,
    ConfiguracionesComponent,
    CierreSesionComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
