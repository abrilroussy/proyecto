import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExpServService } from '../service/exp-serv.service';
import { Experiencia } from '../Model/experiencia';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit {

  nombreE: string = '';
  descripcionE: string = '';
  aniosE: string = ''

  constructor(private expServ: ExpServService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const exp = new Experiencia(this.nombreE, this.descripcionE, this.aniosE,);
    this.expServ.save(exp).subscribe(data => {
      alert("Experiencia Añadida");
      this.router.navigate(['']);
    }, err=> {
      alert("Falló");
      this.router.navigate(['']);
    })
  }

}
