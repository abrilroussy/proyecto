import { Component, OnInit } from '@angular/core';
import { ExpServService } from '../service/exp-serv.service';
import { TokenService } from '../service/token.service';
import { Experiencia } from '../Model/experiencia';

@Component({
  selector: 'app-experienciayproyectos',
  templateUrl: './experienciayproyectos.component.html',
  styleUrls: ['./experienciayproyectos.component.css']
})
export class ExperienciayproyectosComponent implements OnInit {

  exp : Experiencia[] = []

  constructor(private expServ: ExpServService, private tokenServ: TokenService) { }

  isLogged = false; 

  ngOnInit(): void {
    this.cargarExp();
    if (this.tokenServ.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

    cargarExp():void {
      this.expServ.lista().subscribe(
        data => (this.exp = data)
      )
    }

    delete(id? :number) {
      if(id != undefined) {
        this.expServ.delete(id).subscribe(data =>{
          this.cargarExp();
        }, err => {
          alert("No se pudo borrar la Experiencia");
        }
        )
      }
    }
}
