import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html'
})
export class BreadcrumbComponent implements OnInit {

  public url: Array<string>;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.actualURL();
  }

  private actualURL () {
    this.router.events.subscribe((value) => {
      const navigationEnd = value instanceof NavigationEnd;
      if (navigationEnd) {
        let fragmentedURL = this.router.url.split('/');
        fragmentedURL.splice(0,1);
        if (fragmentedURL.length > 0) {
          this.url = fragmentedURL;
        }
      }
    });
  }

}
