import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/servicios/s-experiencia.service';

@Component({
  selector: 'app-new-proyecto',
  templateUrl: './new-proyecto.component.html',
  styleUrls: ['./new-proyecto.component.css']
})
export class NewProyectoComponent implements OnInit {
  
  nombreE: string = '';
  descripcionE: string = '';

  constructor(private sExperiencia:SExperienciaService, private router: Router){}
  
  ngOnInit(): void {
      
  }

  onCreate(): void {
    const expe = new Experiencia(this.nombreE, this.descripcionE);
    this.sExperiencia.save(expe).subscribe(
      {
        next: data => {alert("Experiencia añadida");
        this.router.navigate(['']);
      },
      error: err => {
        alert("Falló");
        this.router.navigate(['']);
      }
      }, 
    )
  }

}
