import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Occupation } from 'src/app/Model/Occupation/occupation.model';
import { Reservation } from 'src/app/Model/Reservation/reservation.model';
import { Terrain } from 'src/app/Model/Terrain/terrain.model';

@Injectable({
  providedIn: 'root'
})
export class OccupationService {
  constructor(private _http: HttpClient) {}

  addOccupation(data: any): Observable<any> {
    return this._http.post('http://localhost:8080/occupation', data);
  }

  updateOccupation(id: string, data: any): Observable<any> {
    return this._http.put(`http://localhost:8080/occupation/${id}`, data);
  }

  getOccupationList(): Observable<any> {
    return this._http.get('http://localhost:8080/occupation');
  }

  deleteOccupation(id: string): Observable<any> {
    return this._http.delete(`http://localhost:8080/occupation/${id}`);
  }

  getAllTerrain():Observable<Terrain[]>{
    return this._http.get<Terrain[]>('http://localhost:8080/terrain');
  }

  getAllReservation():Observable<Reservation[]>{
    return this._http.get<Reservation[]>("http://localhost:8080/reservtion");
  }
  
}
