import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import { TokenServiceService } from '../TokenService/token-service.service';
@Injectable({
  providedIn: 'root'
})
export class AccountServiceService {

  constructor(private tokenService:TokenServiceService) { }
  private loggedIn=new BehaviorSubject<Boolean>(this.tokenService.loggedIn());

  authStatus=this.loggedIn.asObservable();

  changesStatus(value:boolean){
      this.loggedIn.next(value);
  }
}
