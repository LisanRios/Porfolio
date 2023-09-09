import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import { SExperienciaService } from 'src/app/servicios/s-experiencia.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  projectList:any;
  tecnologyList:any;
  expe: Experiencia[] = [];
  constructor(private datosPorfolio:PorfolioService , private sExperiencia:SExperienciaService, private tokenService: TokenService) {}

  islogged = false;

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data=> {
      this.projectList = data.project;
    });
    this.datosPorfolio.obtenerDatos().subscribe(data=> {
      this.tecnologyList = data.tecnology;
    });

    this.cargarExperiencia();
    if (this.tokenService.getToken()) {
      this.islogged = true;
    } else {
      this.islogged = false;
    }
  }


  cargarExperiencia(): void {
    this.sExperiencia.lista().subscribe(data => { this.expe = data; })
  }

  delete(id?: number){
    if(id != undefined){
      this.sExperiencia.delete(id).subscribe(
        data => {
          this.cargarExperiencia();
        }, err => {
          alert("No se pudo borrar la experiencia");
        }
      )
    }
  }
}