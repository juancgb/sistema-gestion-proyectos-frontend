import { Component, OnInit } from '@angular/core';
/** Views */
import { BasicRoutes } from '../../basics/routes';
import { ProcesosRoutes } from '../../procesos/routes';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  private componentesDisponibles: Array<any>;

  constructor() { }

  ngOnInit() {
    this.componentesDisponibles = [
      { path: BasicRoutes.configuraciones.path, icon: BasicRoutes.configuraciones.icon, title: 'Configuraciones' },
      { path: ProcesosRoutes.procesos.path, icon: ProcesosRoutes.procesos.icon, title: 'Procesos' },
      { path: BasicRoutes.cierre_sesion.path, icon: BasicRoutes.cierre_sesion.icon, title: 'Cerrar sesion' }
    ];
  }

}
