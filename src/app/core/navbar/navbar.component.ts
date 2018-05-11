import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  private routes: Array<any>;

  constructor() { }

  ngOnInit() {
    this.routes = [
      { path: '', icon: 'fas fa-home' }
    ];
  }

}
