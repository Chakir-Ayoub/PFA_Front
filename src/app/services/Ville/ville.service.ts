import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VilleService {
  constructor(private _http: HttpClient) {}

  addVille(data: any): Observable<any> {
    return this._http.post('http://localhost:8080/ville', data);
  }

  updateVille(id: string, data: any): Observable<any> {
    return this._http.put(`http://localhost:8080/ville/${id}`, data);
  }

  getVilleList(): Observable<any> {
    return this._http.get('http://localhost:8080/ville');
  }

  deleteVille(id: string): Observable<any> {
    return this._http.delete(`http://localhost:8080/ville/${id}`);
  }
}
