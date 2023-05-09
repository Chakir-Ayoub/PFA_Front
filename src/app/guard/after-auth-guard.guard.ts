import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenServiceService } from '../services/TokenService/token-service.service';

@Injectable({
  providedIn: 'root'
})
export class AfterAuthGuardGuard implements CanActivate {
  constructor(private tokenService:TokenServiceService,private route:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):boolean {
        if(this.tokenService.loggedIn()){
          this.route.navigateByUrl("/")
          return false;
        }
    return true;
  }

}
