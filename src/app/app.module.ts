import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './views/main/main.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { RegisterComponent } from './views/register/register.component';
import { LoginComponent } from './views/login/login.component';
import { ProcesosComponent } from './views/procesos/procesos.component';
import { PipesModule } from './pipes/pipes.module';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavbarComponent,
    RegisterComponent,
    LoginComponent,
    ProcesosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PipesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
