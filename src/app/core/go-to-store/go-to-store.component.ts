import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-go-to-store',
  templateUrl: './go-to-store.component.html'
})
export class GoToStoreComponent implements OnInit {

  public routes: Array<any>;

  constructor() { }

  ngOnInit() {
    this.routes = [
      { path: 'https://play.google.com/store/apps', label: 'Play store', icon: 'fab fa-google-play' },
      { path: 'https://www.apple.com/itunes/', label: 'App store', icon: 'fab fa-app-store' }
    ];
  }

  public openLink (url: string) {
    window.open(url);
  }

}
