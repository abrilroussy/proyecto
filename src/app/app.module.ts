import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { EducacionComponent } from './educacion/educacion.component';
import { HabilidadesComponent } from './habilidades/habilidades.component';
import { ExperienciayproyectosComponent } from './experienciayproyectos/experienciayproyectos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PersonaService } from './service/persona.service';
import { TokenService } from './service/token.service';
import { NewExperienciaComponent } from './experienciayproyectos/new-experiencia.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { EditExperienciaComponent } from './experienciayproyectos/edit-experiencia.component';
import { NewEducacionComponent } from './educacion/new-educacion.component';
import { EditEducacionComponent } from './educacion/edit-educacion.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    AboutmeComponent,
    EducacionComponent,
    HabilidadesComponent,
    ExperienciayproyectosComponent,                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
    LoginComponent, 
    NewExperienciaComponent, 
    PortfolioComponent, EditExperienciaComponent, NewEducacionComponent, EditEducacionComponent,
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
  ],
  providers: [
    PersonaService,
    TokenService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

