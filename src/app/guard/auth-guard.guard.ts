import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenServiceService } from '../services/TokenService/token-service.service';
import { AccountServiceService } from '../services/AccountService/account-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  constructor(private tokenService:TokenServiceService,private accountService:AccountServiceService,private route:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):boolean {
        if(!this.tokenService.loggedIn()){
          this.tokenService.remove();
          this.accountService.changesStatus(false);
          this.route.navigateByUrl("/login")
          return false;
        }
    return true;
  }


}
