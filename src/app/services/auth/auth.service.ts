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
    return this.api.post(this.AUTH + '/sign_in', credentials);
  }

  public signOff () {
    return this.api.delete(this.AUTH + '/sign_out');
  }
}
