import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Workshop } from 'src/app/interface/Workshop';

@Injectable({
  providedIn: 'root'
})
export class WorkshopService {
  url: string = "https://localhost:7079"
 
  constructor(private http: HttpClient) {

  }
  buscarListaWorkshop(): Observable<any> {
    return this.http.get(`${this.url}/api/workshops`, )
  }

  salvarWorkshop(workshop:Workshop): Observable<any>{
    return this.http.post(`${this.url}/api/workshops`,workshop )
  }


}
