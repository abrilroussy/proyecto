import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { persona } from '../Model/persona.model';
import { PersonaService } from '../service/persona.service';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {
  
  isLogged = false;

  test = false;

  person: persona = new persona( 1, '', '', '', '', '', '');
  loginComponent! : LoginComponent;

  constructor (public personaService: PersonaService, private tokenService: TokenService, private router: Router) { }

  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data => {
     var data2: string = JSON.stringify(data);
     data2 = data2.replace('[','');
     data2 = data2.replace(']','');
     this.person = JSON.parse(data2);
    })  
  
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false; 
    }
  
  }

    onLogout() : void {
      this.tokenService.logout();
      window.location.reload();
    }

    getUser() {
      this.isLogged=(this.tokenService.getUsername()!=null);
      this.test=!this.isLogged; 
      return this.tokenService.getUsername();
    }

    switch(){
      this.test=!this.test;
    } 

    /* 
    login() {
      this.router.navigate(['/login']);
    }
    */
  }

