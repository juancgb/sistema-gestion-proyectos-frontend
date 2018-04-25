import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  private modulosDisponibles: Array<any>;

  constructor() { }

  ngOnInit() {
    this.modulosDisponibles = [
      { icon: 'fa-chart-line', link: '/progreso', activado: true },
      { icon: 'fa-cog', link: '/configuraciones', activado: true }
    ];
  }

}
