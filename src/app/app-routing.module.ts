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
import { SedesComponent } from './views/sedes/sedes.component';
import { ProcesosComponent } from './views/procesos/procesos.component';

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'main', component: MainComponent, canActivate: [AuthGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [IsLoggedGuard] },
  { path: 'login', component: LoginComponent, canActivate: [IsLoggedGuard] },
  { path: 'forgot', component: ForgotPasswordComponent, canActivate: [IsLoggedGuard] },
  { path: 'sedes', component: SedesComponent, canActivate: [AuthGuard] },
  { path: 'procesos', component: ProcesosComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
