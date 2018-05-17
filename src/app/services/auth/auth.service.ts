import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { ApiService } from '../api/api.service';

/** Services */
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

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
    let sub: Subscription;
    const promise: Promise<any> = new Promise((resolve, reject) => {
      sub = this.api.post(this.AUTH + '/sign_in', credentials)
      .subscribe((response: HttpResponse<any>) => {
        if (response['headers']) {
          localStorage.setItem('user', JSON.stringify(response['body']['data']));
          response['headers'].keys().map(key => {
            localStorage.setItem(key, response['headers'].get(key));
          });
          this.router.navigate(['/main']);
          resolve();
        }
      }, (err) => {
        console.error(err);
        reject();
      });
    });
    promise.then(value => {
      sub.unsubscribe();
    });
  }

  public signOff () {
    try {
      let subs: Subscription;
      const promise: Promise<any> = new Promise((resolve, reject) => {
        subs = this.api.delete(this.AUTH + '/sign_out').subscribe((response: HttpResponse<any>) => {
          console.log(response);
        });
      });
      promise.then(value => {
        subs.unsubscribe();
      });
    } finally {
      localStorage.clear();
      this.router.navigate(['/login']);
    }
  }
}
