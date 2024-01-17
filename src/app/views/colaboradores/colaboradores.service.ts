import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColaboradoresService {
  url: string = "https://localhost:7297"
 
  constructor(private http: HttpClient) {

  }
  buscarListaColaboradores(): Observable<any> {
    return this.http.get(`${this.url}/api/Colaborador`, )
  }

  salvarColaborador(colaborador:any): Observable<any>{
    return this.http.post(`${this.url}/api/Colaborador`,colaborador )
  }
  apagarColaborador(id:number): Observable<any>{
    return this.http.delete(`${this.url}/api/Colaborador/${id}` )
  }
}
