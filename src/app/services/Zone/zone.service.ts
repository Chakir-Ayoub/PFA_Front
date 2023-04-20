import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ZoneService {
  constructor(private _http: HttpClient) {}

  addZone(data: any): Observable<any> {
    return this._http.post('http://localhost:8080/zone', data);
  }

  updateZone(id: string, data: any): Observable<any> {
    return this._http.put(`http://localhost:8080/zone/${id}`, data);
  }

  getZoneList(): Observable<any> {
    return this._http.get('http://localhost:8080/zone');
  }

  deleteZone(id: string): Observable<any> {
    return this._http.delete(`http://localhost:8080/zone/${id}`);
  }

  getAllVille():Observable<any>{
    return this._http.get('http://localhost:8080/ville');
  }
}
