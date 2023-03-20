import { Component, OnInit } from '@angular/core';
import { persona } from '../Model/persona.model';
import { PersonaService } from '../service/persona.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {


  persona: persona = new persona('','','');
  
  constructor (public personaService: PersonaService) { }

  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data => {this.persona = data})
  }
  

}
