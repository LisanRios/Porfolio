import { Component } from '@angular/core';
import { TokenService } from './servicios/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'porfolioweb';

  constructor(private router: Router, private tokenService: TokenService){}


}
  let previousTitle = document.title;

  window.addEventListener('blur', () => {
    previousTitle = document.title;
    document.title = ' Porfolio web || ¡No te vayas! :(';
  })
  window.addEventListener('focus', () => {
    document.title = previousTitle;
  })

  

