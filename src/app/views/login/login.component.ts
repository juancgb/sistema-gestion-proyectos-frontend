import { Component, OnInit, Inject } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

/** Services */
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  public routes: any = {
    FORGOT: { path: '/forgot', icon: 'far fa-envelope' },
    REGISTER: { path: '/register', icon: 'fas fa-user-plus' }
  };

  public signInForm: FormGroup;

  public logginInProcess: boolean;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private auth: AuthService
  ) {
    this.logginInProcess = false;
  }

  ngOnInit() {
    this.loadForm();
  }

  private loadForm (): void {
    this.signInForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  signIn (): void {
    this.logginInProcess = true;
    let sub: Subscription;
    new Promise((resolve, reject) => {
      sub = this.auth.signIn(this.signInForm.value)
      .subscribe((response: HttpResponse<any>) => {
        if (response['headers']) {
          localStorage.setItem('user', JSON.stringify(response['body']['data']));
          response['headers'].keys().map(key => {
            localStorage.setItem(key, response['headers'].get(key));
          });
          resolve();
        }
      }, (err) => {
        console.error('signIn()', err);
        reject();
      });
    }).then(value => {
      sub.unsubscribe();
      this.logginInProcess = false;
      this.router.navigate(['/main']);
    }).catch(err => {
      sub.unsubscribe();
      this.logginInProcess = false;
    });
  }

}
