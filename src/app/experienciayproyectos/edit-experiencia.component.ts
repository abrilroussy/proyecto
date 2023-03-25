import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from '../Model/experiencia';
import { ExpServService } from '../service/exp-serv.service';

@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrls: ['./edit-experiencia.component.css']
})
export class EditExperienciaComponent implements OnInit {

  expLab: Experiencia = null;

  constructor(private expServ: ExpServService, private activatedRoute: ActivatedRoute, private router: Router) { }


  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.expServ.detail(id).subscribe(
      data => {
        this.expLab = data;
      }, err => {
        alert("Error al modificar Experiencia");
      this.router.navigate(['']); 
      }
    )
  }
  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.expServ.update(id, this.expLab).subscribe(data => {
      this.router.navigate(['']);
    }, err =>{
      alert("Error al modificar Experiencia");
      this.router.navigate(['']);    
    })
  }
}
