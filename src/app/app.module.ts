import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

/** Angular Material Componenets */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatToolbarModule,
  MatSidenavModule,
  MatMenuModule,
  MatCardModule,
  MatIconModule,
  MatButtonModule,
  MatTooltipModule,
  MatDialogModule,
  MatStepperModule,
  MatSnackBarModule,
  MatGridListModule,
  MatInputModule,
  MatListModule,
  MatTableModule,
  MatChipsModule,
  MatCheckboxModule,
  MatSlideToggleModule
} from '@angular/material';
/** Services */
import { InterceptorResquestService } from './services/interceptor-request/interceptor-request.service';
import { InterceptorResponseService } from './services/interceptor-response/interceptor-response.service';
import { ApiService } from './services/api/api.service';
import { AuthService } from './services/auth/auth.service';
import { RolesService } from './services/roles/roles.service';
import { SedesService } from './services/sedes/sedes.service';
import { ProgramasService } from './services/programas/programas.service';
import { ProcesosService } from './services/procesos/procesos.service';
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
import { UsersComponent } from './views/users/users.component';
import { GoToStoreComponent } from './core/go-to-store/go-to-store.component';
import { SedesComponent } from './views/sedes/sedes/sedes.component';
import { SedeComponent } from './views/sedes/sede/sede.component';
import { ProcesosComponent } from './views/procesos/procesos/procesos.component';
import { RolesComponent } from './views/roles/roles/roles.component';
import { NivelesComponent } from './views/niveles/niveles/niveles.component';
import { ActividadesComponent } from './views/actividades/actividades/actividades.component';
import { ProcesoComponent } from './views/procesos/proceso/proceso.component';
import { NewProcesoComponent } from './views/procesos/new-proceso/new-proceso.component';
import { NewSedeComponent } from './views/sedes/new-sede/new-sede.component';
import { ProyectosComponent } from './views/proyectos/proyectos.component';
import { BreadcrumbComponent } from './core/breadcrumb/breadcrumb.component';

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
    ProcesoComponent,
    NewProcesoComponent,
    NewSedeComponent,
    ProyectosComponent,
    BreadcrumbComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, // Angular Material Modules
    MatToolbarModule,
    MatSidenavModule,
    MatMenuModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatDialogModule,
    MatStepperModule,
    MatSnackBarModule,
    MatGridListModule,
    MatInputModule,
    MatListModule,
    MatTableModule,
    MatChipsModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    AppRoutingModule, // custom modules
    PipesModule
  ],
  entryComponents: [
    NewSedeComponent,
    NewProcesoComponent
  ],
  providers: [
    FormBuilder,
    ApiService,
    AuthService,
    RolesService,
    SedesService,
    ProgramasService,
    ProcesosService,
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorResquestService, multi: true }
    // { provide: HTTP_INTERCEPTORS, useClass: InterceptorResponseService, multi: false }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
