import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { ApiService } from '../api/api.service';

/** Services */
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  private AUTH = '/api/v1/auth';

  constructor(
    private router: Router,
    private api: ApiService
  ) { }

  public register (credentials: any) {
    return this.api.post(this.AUTH, credentials);
  }

  public signIn (credentials: any) {
    return this.api.post(this.AUTH + '/sign_in', credentials)
    .subscribe((response: HttpResponse<any>) => {
      localStorage.setItem('user', JSON.stringify(response['body']['data']));
      if (response['headers']) {
        response['headers'].keys().map(key => {
          localStorage.setItem(key, response['headers'].get(key));
        });
      }
      this.router.navigate(['/main']);
    }, (err) => {
      console.log(err);
    }, () => {
      console.log('finish');
    });
  }

  public signOff () {
    let credentials = null;
    try {
      if (localStorage.length > 0 && localStorage.getItem('user')) {
        credentials = JSON.parse(localStorage.getItem('user'));
      }
      return this.api.post(this.AUTH + '/sign_out', credentials);
    } finally {
      localStorage.clear();
      this.router.navigate(['/login']);
    }
  }
}
