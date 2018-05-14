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
      { path: '/sedes', label: 'Sedes', icon: 'far fa-building' },
      { path: '/procesos', label: 'Procesos', icon: 'fas fa-list'},
      { path: '/programas', label: 'Programas', icon: 'far fa-calendar' },
      { path: '/proyectos', label: 'Proyectos', icon: 'fas fa-clone' }
    ];
  }

}
