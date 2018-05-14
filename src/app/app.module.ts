import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

/** Services */
import { InterceptorService } from './services/interceptor/interceptor.service';
import { ApiService } from './services/api/api.service';
import { AuthService } from './services/auth/auth.service';

/** Modules */
import { AppRoutingModule } from './app-routing.module';
import { PipesModule } from './pipes/pipes.module';

/** Components */
import { AppComponent } from './app.component';
import { MainComponent } from './views/main/main.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { RegisterComponent } from './views/register/register.component';
import { LoginComponent } from './views/login/login.component';
import { ForgotPasswordComponent } from './views/forgot-password/forgot-password.component';
import { ProcesosComponent } from './views/procesos/procesos.component';
import { SedesComponent } from './views/sedes/sedes.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavbarComponent,
    RegisterComponent,
    LoginComponent,
    ForgotPasswordComponent,
    ProcesosComponent,
    SedesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    PipesModule
  ],
  providers: [
    FormBuilder,
    ApiService,
    AuthService,
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
