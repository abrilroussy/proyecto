import { Component, OnInit } from '@angular/core';
import { Educacion } from '../Model/educacion';
import { EduServService } from '../service/edu-serv.service';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  edu : Educacion[] = []

  constructor(private eduServ : EduServService, private tokenServ : TokenService) { }

  isLogged = false

  ngOnInit(): void {
    this.cargarEdu();
    if (this.tokenServ.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarEdu():void {
    this.eduServ.lista().subscribe(
      data => (this.edu = data)
    )
  }

  delete(id? :number) {
    if(id != undefined) {
      this.eduServ.delete(id).subscribe(data =>{
        this.cargarEdu();
      }, err => {
        alert("No se pudo borrar la Educacion");
      }
      )
    }
  }

}
