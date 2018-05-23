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
      { path: '/usuarios', label: 'Usuarios', icon: 'fas fa-users' },
    ];
  }

}
