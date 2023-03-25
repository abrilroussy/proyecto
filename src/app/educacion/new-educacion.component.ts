import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from '../Model/educacion';
import { EduServService } from '../service/edu-serv.service';

@Component({
  selector: 'app-new-educacion',
  templateUrl: './new-educacion.component.html',
  styleUrls: ['./new-educacion.component.css']
})
export class NewEducacionComponent implements OnInit {

  nombreEdu: string = '';
  descripcionEdu: string = '';
  aniosEdu: string = '';

  constructor(private eduServ: EduServService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const edu = new Educacion(this.nombreEdu, this.descripcionEdu, this.aniosEdu,);
    this.eduServ.save(edu).subscribe(data => {
      alert("Educacion Añadida");
      this.router.navigate(['']);
    }, err=> {
      alert("Falló");
      this.router.navigate(['']);
    })
  }
}
