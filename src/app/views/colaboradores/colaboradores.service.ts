import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColaboradoresService {
  url: string = "https://localhost:7079"
 
  constructor(private http: HttpClient) {

  }
  buscarListaColaboradores(id: any): Observable<any> {
    return this.http.get(`${this.url}/api/Colaborador/${id}`, )
  }

  salvarColaborador(colaborador:any): Observable<any>{
    return this.http.post(`${this.url}/api/Colaborador`,colaborador )
  }

}
