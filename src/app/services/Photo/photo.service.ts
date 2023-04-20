import { HttpClient,HttpEvent, HttpRequest  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Photo } from 'src/app/Model/Photo/photo.model';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

 constructor(private _http: HttpClient) {}

  addPhoto(data: Photo): Observable<Photo> {
    return this._http.post<Photo>('http://localhost:8080/photo', data);
  }

  updatePhoto(id: string, data: Photo): Observable<Photo> {
    return this._http.put<Photo>(`http://localhost:8080/photo/${id}`, data);
  }

  getPhotoList(): Observable<any> {
    return this._http.get('http://localhost:8080/photo');
  }

  deletePhoto(id: string): Observable<any> {
    return this._http.delete(`http://localhost:8080/photo/${id}`);
  }

  getById(id:String):Observable<Photo>{
    return this._http.get<Photo>(`http://localhost:8080/photo/${id}`);
  }

  getAllTerrain():Observable<any>{
    return this._http.get('http://localhost:8080/terrain');
  }
  upload(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('file', file);

    const req = new HttpRequest('POST', `http://localhost:8080/terrain`, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this._http.request(req);
  }

  getFiles(): Observable<any> {
    return this._http.get('http://localhost:8080/terrain');
  }
}
