import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tecnologia } from 'src/app/model/tecnologia';
import { STecnologiaService } from 'src/app/servicios/s-tecnologia.service';

@Component({
  selector: 'app-edit-tecnologia',
  templateUrl: './edit-tecnologia.component.html',
  styleUrls: ['./edit-tecnologia.component.css']
})
export class EditTecnologiaComponent implements OnInit  {
  tecno: Tecnologia = null;

  constructor(private sTecnologia: STecnologiaService, private activatedRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sTecnologia.detail(id).subscribe(
      data =>{
        this.tecno = data;
      }, err =>{
        alert("Error al modificar la tecnologia");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.sTecnologia.update(id, this.tecno).subscribe(
      data => {
        this.router.navigate(['']);
      }, err =>{
         alert("Error al modificar sTecnologia");
         this.router.navigate(['']);
      }
    )
  }

}
