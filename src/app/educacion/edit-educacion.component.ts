import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from '../Model/educacion';
import { EduServService } from '../service/edu-serv.service';

@Component({
  selector: 'app-edit-educacion',
  templateUrl: './edit-educacion.component.html',
  styleUrls: ['./edit-educacion.component.css']
})
export class EditEducacionComponent implements OnInit {

  educ : Educacion = null;

  constructor( private eduServ: EduServService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.eduServ.detail(id).subscribe(
      data => {
        this.educ = data;
      }, err => {
        alert("Error al modificar Educacion");
      this.router.navigate(['']); 
      }
    )
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.eduServ.update(id, this.educ).subscribe(data => {
      this.router.navigate(['']);
    }, err =>{
      alert("Error al modificar Experiencia");
      this.router.navigate(['']);    
    })
  }
}
