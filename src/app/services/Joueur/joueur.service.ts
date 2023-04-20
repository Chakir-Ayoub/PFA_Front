import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JoueurService {

  constructor(private _http: HttpClient) {}
  addEmployee(data: any): Observable<any> {
    return this._http.post('http://localhost:8080/users', data);
  }

  updateEmployee(id: string, data: any): Observable<any> {
    return this._http.put(`http://localhost:8080/users/${id}`, data);
  }

  getEmployeeList(): Observable<any> {
    return this._http.get('http://localhost:8080/users');
  }

  deleteEmployee(id: string): Observable<any> {
    return this._http.delete(`http://localhost:8080/users/${id}`);
  }
  
}
