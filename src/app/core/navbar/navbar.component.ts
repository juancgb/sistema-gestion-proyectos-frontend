import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  public url: string;
  public routes: any = {
    MAIN: { path: '', icon: 'fas fa-home' },
    LOGIN: { path: '/login', icon: 'fas fa-sign-in-alt' },
    LOGOFF: { path: '', icon: 'fas fa-sign-out-alt' }
  };

  constructor(
    private router: Router,
    private auth: AuthService
  ) { }

  ngOnInit() {
    this.actualURL ();
  }

  private actualURL () {
    this.router.events.subscribe((value) => {
      const navigationEnd = value instanceof NavigationEnd;
      if (navigationEnd) {
        const fragmentedURL = this.router.url.split('/');
        if (fragmentedURL.length > 1) {
          this.url = fragmentedURL[1];
        }
      }
    });
  }

  public isLogged (): boolean {
    return localStorage.getItem('user') !== null;
  }

  public signOut (): void {
    this.auth.signOff();
  }

}
