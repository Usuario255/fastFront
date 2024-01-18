import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AtaService {

  url: string = "https://localhost:7079"
 
  constructor(private http: HttpClient) {

  }
  buscarListaAtas(id: any): Observable<any> {
    return this.http.get(`${this.url}/api/atas`, )
  }

  salvarAta(ata:any): Observable<any>{
    return this.http.post(`${this.url}/api/atas`,ata )
  }

  atualizarAta(ataId:any,colaboradorId:any,ata: any): Observable<any>{
    return this.http.put(`${this.url}/api/atas/${ataId}/colaboradores/${colaboradorId}`, ata)
  }
  apagarAta(ataId:any,colaboradorId:any,ata: any): Observable<any>{
    return this.http.delete(`${this.url}/api/atas/${ataId}/colaboradores/${colaboradorId}`, ata)
  }

}
