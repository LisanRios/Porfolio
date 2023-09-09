import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';

import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModuleTsModule } from './app-routing.module.ts/app-routing.module.ts.module';
import { TecnologiasComponent } from './componentes/tecnologias/tecnologias.component';
import { Pagina404Component } from './componentes/pagina404/pagina404.component';
import { LoginComponent } from './componentes/login/login.component';
import { FormsModule } from '@angular/forms';
import { NewProyectoComponent } from './componentes/proyectos/new-proyecto.component';
import { EditProyectosComponent } from './componentes/proyectos/edit-proyectos.component';
import { NewTecnologiaComponent } from './componentes/tecnologias/new-tecnologia.component';
import { EditTecnologiaComponent } from './componentes/tecnologias/edit-tecnologia.component';




@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    ProyectosComponent,
    ContactoComponent,
    TecnologiasComponent,
    Pagina404Component,
    LoginComponent,
    NewProyectoComponent,
    EditProyectosComponent,
    NewTecnologiaComponent,
    EditTecnologiaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModuleTsModule,
    FormsModule,    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
