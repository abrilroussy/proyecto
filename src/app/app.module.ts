import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PagEditarComponent } from './pag-editar/pag-editar.component';


@NgModule({
  declarations: [
    AppComponent,
    PagEditarComponent,
    LoginComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot ([
      {path: "pag-editar", component: PagEditarComponent},
      {path: "login", component: LoginComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

