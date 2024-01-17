import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorkshopService {
  url: string = "https://localhost:7297"
 
  constructor(private http: HttpClient) {

  }
  buscarListaWorkshop(): Observable<any> {
    return this.http.get(`${this.url}/api/Workshop`, )
  }

  salvarWorkshop(colaborador:any): Observable<any>{
    return this.http.post(`${this.url}/api/Workshop`,colaborador )
  }
  apagarWorkshop(id:number): Observable<any>{
    return this.http.delete(`${this.url}/api/Workshop/${id}` )
  }
}
