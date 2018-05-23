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

/** Services */
import { RolesService } from './services/roles/roles.service';
import { SedesService } from './services/sedes/sedes.service';
import { ProgramasService } from './services/programas/programas.service';
import { ProcesosService } from './services/procesos/procesos.service';
/** Components */
import { AppComponent } from './app.component';
import { MainComponent } from './views/main/main.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { RegisterComponent } from './views/register/register.component';
import { LoginComponent } from './views/login/login.component';
import { ForgotPasswordComponent } from './views/forgot-password/forgot-password.component';
import { UsersComponent } from './views/users/users.component';
import { GoToStoreComponent } from './core/go-to-store/go-to-store.component';
import { SedesComponent } from './views/sedes/sedes/sedes.component';
import { SedeComponent } from './views/sedes/sede/sede.component';
import { RolesComponent } from './views/sedes/roles/roles.component';
import { ProcesosComponent } from './views/sedes/procesos/procesos/procesos.component';
import { ProcesoComponent } from './views/sedes/procesos/proceso/proceso.component';
import { NivelesComponent } from './views/sedes/procesos/niveles/niveles/niveles.component';
import { ActividadesComponent } from './views/sedes/procesos/niveles/actividades/actividades.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavbarComponent,
    RegisterComponent,
    LoginComponent,
    ForgotPasswordComponent,
    ProcesosComponent,
    RolesComponent,
    SedesComponent,
    UsersComponent,
    GoToStoreComponent,
    NivelesComponent,
    ActividadesComponent,
    SedeComponent,
    ProcesoComponent
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
    RolesService,
    SedesService,
    ProgramasService,
    ProcesosService,
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
