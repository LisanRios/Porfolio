import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tecnologia } from 'src/app/model/tecnologia';
import { STecnologiaService } from 'src/app/servicios/s-tecnologia.service';

@Component({
  selector: 'app-new-tecnologia',
  templateUrl: './new-tecnologia.component.html',
  styleUrls: ['./new-tecnologia.component.css']
})
export class NewTecnologiaComponent implements OnInit {
    
  nombreT: string = '';
  descripcionT: string = '';

  constructor(private sTecnologia:STecnologiaService, private router: Router){}
  
  ngOnInit(): void {
      
  }
  onCreate(): void {
    const tec = new Tecnologia(this.nombreT, this.descripcionT);
    this.sTecnologia.save(tec).subscribe(
      {
        next: data => {alert("Tecnologia añadida");
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
