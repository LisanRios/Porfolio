import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tecnologia } from '../model/tecnologia';

@Injectable({
  providedIn: 'root'
})
export class STecnologiaService {
  expURL= 'http://localhost:8080/tecno';

  
  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Tecnologia[]>{
    return this.httpClient.get<Tecnologia[]>(this.expURL + 'lista');
  }

  public detail(id: number): Observable<Tecnologia>{
    return this.httpClient.get<Tecnologia>(this.expURL + `detail/${id}`);
  } 

  public save(tecnologia: Tecnologia): Observable<any>{
    return this.httpClient.post<any>(this.expURL + 'create', tecnologia);
  }

  public update(id: number, tecnologia: Tecnologia): Observable<any>{
    return this.httpClient.put<any>(this.expURL + `update/${id}`, tecnologia);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.expURL + `delete/${id}`);
  }
}