import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from "@angular/router";

import { AppComponent } from '../app.component';
import { EncabezadoComponent } from '../componentes/encabezado/encabezado.component';
import { ProyectosComponent } from '../componentes/proyectos/proyectos.component';
import { ContactoComponent } from '../componentes/contacto/contacto.component';
import { TecnologiasComponent } from '../componentes/tecnologias/tecnologias.component';
import { Pagina404Component } from '../componentes/pagina404/pagina404.component';
import { LoginComponent } from '../componentes/login/login.component';
import { NewProyectoComponent } from '../componentes/proyectos/new-proyecto.component';
import { EditProyectosComponent } from '../componentes/proyectos/edit-proyectos.component';
import { NewTecnologiaComponent } from '../componentes/tecnologias/new-tecnologia.component';
import { EditTecnologiaComponent } from '../componentes/tecnologias/edit-tecnologia.component';


const routes: Routes = [
  {path: '', redirectTo: 'Inicio', pathMatch: 'full'},
  {path: 'Inicio', component: EncabezadoComponent},
  {path: 'Proyectos', component: ProyectosComponent},
  {path: 'Tecnologías-Dominadas', component: TecnologiasComponent},
  {path: 'Contacto', component: ContactoComponent}, 
  {path: 'Login', component: LoginComponent}, 
  {path: 'nuevaexp', component: NewProyectoComponent},
  {path: 'editexp/:id', component: EditProyectosComponent},
  {path: 'nuevatec', component: NewTecnologiaComponent},
  {path: 'edittec/:id', component: EditTecnologiaComponent},
  {path: '**', component: Pagina404Component},
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModuleTsModule { }
