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
    .subscribe((val: HttpResponse<any>) => {
      localStorage.setItem('user', JSON.stringify(val['data']));
      this.router.navigate(['/main']);
    }, (err) => {
      console.log(err);
    }, () => {
      console.log('finish');
    });
  }

  public signOff () {
    const credentials = localStorage.getItem('user');
    localStorage.clear();
    this.router.navigate(['/login']);
    return this.api.post(this.AUTH + '/sign_out', credentials);
  }
}
