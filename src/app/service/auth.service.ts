import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginComponent } from '../login/login.component';
import { JwtDto } from '../Model/jwt-dto';
import { LoginUsuario } from '../Model/login-usuario';
import { NuevoUsuario } from '../Model/nuevo-usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authURL = 'https://backendabril2.onrender.com/auth/';
  
  constructor(private httpClient : HttpClient) { }

  public nuevo(nuevoUsusario : NuevoUsuario): Observable<any> {
    return this.httpClient.post<any>(this.authURL + 'nuevo', nuevoUsusario)
  }

  public login(loginUsuario : LoginUsuario): Observable<JwtDto> {
    return this.httpClient.post<JwtDto>(this.authURL + 'login', loginUsuario)
  }
}
