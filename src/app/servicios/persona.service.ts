import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../model/persona';

const TOKEN_KEY = 'AuthToken';
const USERNAME_USER = 'AuthUsername';
const AUTHORITIES_KEY = 'Authorities';
@Injectable({
  providedIn: 'root'
})
export class PersonaServiceService {
  URL = 'http://localhost:8080/personas/';

  constructor(private http: HttpClient) {}

    public getPersona(): Observable<persona> {
      return this.http.get<persona>(this.URL+ 'traer/perfil');
    }

  
}
