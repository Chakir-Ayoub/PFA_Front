import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AbonnementService {

  constructor(private _http: HttpClient) {}
  addAbonnement(data: any): Observable<any> {
    return this._http.post('http://localhost:8080/abonnement', data);
  }

  updateAbonnement(id: string, data: any): Observable<any> {
    return this._http.put(`http://localhost:8080/abonnement/${id}`, data);
  }

  getAbonnementList(): Observable<any> {
    return this._http.get('http://localhost:8080/abonnement');
  }

  deleteAbonnement(id: string): Observable<any> {
    return this._http.delete(`http://localhost:8080/abonnement/${id}`);
  }

  getAllClient(): Observable<any>{
    return this._http.get('http://localhost:8080/users');
  }

  getAllPacke(): Observable<any>{
    return this._http.get('http://localhost:8080/packe');
  }
}
