import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html'
})
export class MainComponent implements OnInit {

  public routes: Array<any>;

  constructor() { }

  ngOnInit() {
    this.routes = [
      { path: '/procesos', label: 'Procesos', icon: ''},
      { path: '/programas', label: 'Programas', icon: '' },
      { path: '/sedes', label: 'Sedes', icon: '' },
      { path: '/proyectos', label: 'proyectos', icon: '' }
    ];
  }

}
