import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  private routes: Array<any>;
  public url: string;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.loadRoutes();
    this.actualURL();
  }

  private loadRoutes() {
    this.routes = [
      { path: '', icon: 'fas fa-home' }
    ];
  }

  private actualURL() {
    this.router.events.subscribe((value) => {
      let navigationEnd = value instanceof NavigationEnd;
      if (navigationEnd) {
        let fragmentedURL = this.router.url.split('/');
        this.url = fragmentedURL[1];
        if(fragmentedURL.length > 1){
          console.log(fragmentedURL[1]);
        }
      }
    });
  }

}
