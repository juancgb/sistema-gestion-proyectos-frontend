import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/** Guards */
import { AuthGuard } from './guards/auth/auth.guard';
import { IsLoggedGuard } from './guards/isLogged/is-logged.guard';
/** Componentes */
import { MainComponent } from './views/main/main.component';
import { RegisterComponent } from './views/register/register.component';
import { LoginComponent } from './views/login/login.component';
import { ForgotPasswordComponent } from './views/forgot-password/forgot-password.component';
import { UsersComponent } from './views/users/users.component';
import { SedesComponent } from './views/sedes/sedes/sedes.component';
import { SedeComponent } from './views/sedes/sede/sede.component';
import { RolesComponent } from './views/roles/roles/roles.component';
import { ProcesosComponent } from './views/procesos/procesos/procesos.component';
import { ProcesoComponent } from './views/procesos/proceso/proceso.component';


const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'main', component: MainComponent, canActivate: [AuthGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [IsLoggedGuard] },
  { path: 'login', component: LoginComponent, canActivate: [IsLoggedGuard] },
  { path: 'forgot', component: ForgotPasswordComponent, canActivate: [IsLoggedGuard] },
  { path: 'usuarios', component: UsersComponent, canActivate: [AuthGuard] },
  { path: 'sedes', children: [
    { path: '', component: SedesComponent, canActivate: [AuthGuard] },
    { path: ':sedeId', component: SedeComponent, canActivate: [AuthGuard] },
    { path: ':sedeId/roles' , component: RolesComponent, canActivate: [AuthGuard] },
    { path: ':sedeId/procesos', children: [
      { path: '', component: ProcesosComponent, canActivate: [AuthGuard] },
      { path: ':procesoId', component: ProcesoComponent, canActivate: [AuthGuard] },
    ] }
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
