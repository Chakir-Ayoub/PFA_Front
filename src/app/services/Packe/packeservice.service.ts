import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Packe } from 'src/app/Model/Packe/packe.model';

@Injectable({
  providedIn: 'root'
})
export class PackeserviceService {
  constructor(private _http: HttpClient) {}

  addPacke(data: Packe): Observable<Packe> {
    return this._http.post<Packe>('http://localhost:8080/packe', data);
  }

  updatePacke(id: string, data: Packe): Observable<Packe> {
    return this._http.put<Packe>(`http://localhost:8080/packe/${id}`, data);
  }

  getPackeList(): Observable<any> {
    return this._http.get('http://localhost:8080/packe');
  }

  deletePacke(id: string): Observable<any> {
    return this._http.delete(`http://localhost:8080/packe/${id}`);
  }

  getById(id:String):Observable<Packe>{
    return this._http.get<Packe>(`http://localhost:8080/packe/${id}`);
  }
  
}
