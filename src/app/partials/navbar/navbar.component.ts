import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AccountServiceService } from 'src/app/services/AccountService/account-service.service';
import { TokenServiceService } from 'src/app/services/TokenService/token-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  currentUser:null;
  constructor(private accountService:AccountServiceService,private tokenService:TokenServiceService,private route:Router){}
  ngOnInit(): void {
      this.accountService.authStatus.subscribe(res=>{
        this.currentUser=this.tokenService.getInfos();
      })
  }

  lougout(){
    this.tokenService.remove();
    this.accountService.changesStatus(false);
    this.route.navigateByUrl("/login");
  }
}
