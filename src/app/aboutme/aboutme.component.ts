import { Component, Injectable, OnInit } from '@angular/core';
import { persona } from '../Model/persona.model';
import { PersonaService } from '../service/persona.service';


@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {

  person: persona = new persona( 1, '', '', '', '', '', '');
  
  constructor (public personaService: PersonaService) { }


  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data => {
     var data2: string = JSON.stringify(data);
     data2 = data2.replace('[','');
     data2 = data2.replace(']','');
     //const objeto: {id:number,nombre:string,apellido:string,img:string} = JSON.parse(this.data2);
     //this.person.nombre = objeto.nombre;
     //this.person.apellido = objeto.apellido;
     //this.person.img = objeto.img;
     this.person = JSON.parse(data2);
     console.log(this.person)
    })  }

}
