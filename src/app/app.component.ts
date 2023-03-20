import { Component, OnInit } from '@angular/core';
import { persona } from './Model/persona.model';
import { PersonaService } from './service/persona.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyectoAngular';

  test = false;

  persona: persona = new persona('','','');
  
  constructor (public personaService: PersonaService) { }

  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data => {this.persona = data})
  }
  
    
}

