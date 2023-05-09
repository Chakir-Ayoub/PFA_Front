import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Club } from '../Model/Club/club.model';
import { Zone } from '../Model/Zone/zone.model';
import { Terrain } from '../Model/Terrain/terrain.model';

@Injectable({
  providedIn: 'root'
})
export class TerrainServiceService {

  constructor(private _http: HttpClient) {}

  addEmployee(data: Terrain): Observable<Terrain> {
    return this._http.post<Terrain>('http://localhost:8080/terrain', data);
  }

  updateEmployee(id: string, data: any): Observable<any> {
    return this._http.put(`http://localhost:8080/terrain/${id}`, data);
  }

  getEmployeeList(): Observable<any> {
    return this._http.get('http://localhost:8080/terrain');
  }

  deleteEmployee(id: string): Observable<any> {
    return this._http.delete(`http://localhost:8080/terrain/${id}`);
  }

  getById(id:String):Observable<Terrain>{
    return this._http.get<Terrain>(`http://localhost:8080/terrain/${id}`);
  }


  getAllClub():Observable<Club[]>{
    return this._http.get<Club[]>('http://localhost:8080/club');
  }

  getAllZone():Observable<Zone[]>{
    return this._http.get<Zone[]>('http://localhost:8080/zone');
  }
}
