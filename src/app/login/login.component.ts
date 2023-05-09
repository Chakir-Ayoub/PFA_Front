import { AuthServiceService } from './../services/AuthService/auth-service.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TokenServiceService } from '../services/TokenService/token-service.service';
import { Router } from '@angular/router';
import { AccountServiceService } from '../services/AccountService/account-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm=new FormGroup({
    email: new FormControl(null,[Validators.required,Validators.email]),
    password:new FormControl(null,[Validators.required,Validators.minLength(8),Validators.maxLength(12)])
   })



  ngOnInit() {
  }
  constructor(private authService: AuthServiceService,
              private tokenService:TokenServiceService,
              private router:Router,
              private accountService:AccountServiceService){}


  login(){
    this.authService.login(this.loginForm.value).subscribe(res=>this.handleResponse(res));
  }

  handleResponse(res){
    this.tokenService.handle(res);
    this.accountService.changesStatus(true);
    this.router.navigateByUrl("/home");
  }
}
