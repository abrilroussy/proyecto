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
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { PersonaService } from './service/persona.service';
import { persona } from './Model/persona.model';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EncabezadoComponent,
    AboutmeComponent,
    EducacionComponent,
    HabilidadesComponent,
    ExperienciayproyectosComponent,
    PortfolioComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    
  ],
  providers: [
    PersonaService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

