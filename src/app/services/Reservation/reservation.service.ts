import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private _http: HttpClient) {}
  addReservation(data: any): Observable<any> {
    return this._http.post('http://localhost:8080/reservtion', data);
  }

  updateReservation(id: string, data: any): Observable<any> {
    return this._http.put(`http://localhost:8080/reservtion/${id}`, data);
  }

  getReservationList(): Observable<any> {
    return this._http.get('http://localhost:8080/reservtion');
  }

  deleteReservation(id: string): Observable<any> {
    return this._http.delete(`http://localhost:8080/reservtion/${id}`);
  }

  getAllClient(): Observable<any>{
    return this._http.get('http://localhost:8080/users');
  }


}
