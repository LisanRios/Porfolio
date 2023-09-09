import { Component, OnInit } from '@angular/core';
import { Tecnologia } from 'src/app/model/tecnologia';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import { STecnologiaService } from 'src/app/servicios/s-tecnologia.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-tecnologias',
  templateUrl: './tecnologias.component.html',
  styleUrls: ['./tecnologias.component.css']
})
export class TecnologiasComponent implements OnInit {
  tecnologyList:any;
  tec: Tecnologia[] = [];
  constructor(private datosPorfolio:PorfolioService , private sTecnologia:STecnologiaService, private tokenService: TokenService ) {}
  islogged = false;

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data=> {
      this.tecnologyList = data.tecnology;
    });

  this.cargarTecnologia();
  if (this.tokenService.getToken()) {
    this.islogged = true;
  } else {
    this.islogged = false;
  }
  }

  cargarTecnologia(): void {
    this.sTecnologia.lista().subscribe(data => { this.tec = data;})
  }

  delete(id?: number){
    if(id != undefined){
      this.sTecnologia.delete(id).subscribe(
        data => {
          this.cargarTecnologia();
        }, err => {
          alert("No se pudo borrar la tecnologia");
        }
      )
    }
  }
}

