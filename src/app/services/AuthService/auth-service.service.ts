import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private Http:HttpClient) { }

  login(data:Partial<{email:string;password:string}>){
    return this.Http.post("http://localhost:8080/proprietaire/login",data);
  }
}
