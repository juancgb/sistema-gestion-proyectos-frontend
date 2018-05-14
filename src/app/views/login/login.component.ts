import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  constructor(
    private fb: FormBuilder,
    private auth: AuthService
  ) { }

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
    this.auth.signIn(this.signInForm.value);
  }

}
