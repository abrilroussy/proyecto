import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditEducacionComponent } from './educacion/edit-educacion.component';
import { NewEducacionComponent } from './educacion/new-educacion.component';
import { EditExperienciaComponent } from './experienciayproyectos/edit-experiencia.component';
import { NewExperienciaComponent } from './experienciayproyectos/new-experiencia.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

const routes: Routes = [
  {path: '', component: PortfolioComponent},
  {path: 'nuevaExp', component: NewExperienciaComponent},
  {path: 'editExp/:id', component: EditExperienciaComponent},
  {path: 'nuevaEdu', component: NewEducacionComponent},
  {path: 'editEdu/:id', component: EditEducacionComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
