import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material';

import { LoginserviceService } from '../loginservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
records={}
  constructor(private router: Router,private http:HttpClient,private myService:LoginserviceService) { }
  username: string;
  password: string;

  ngOnInit() {
   

  }
  btnClick=function(){
    this.records=this.myService.getAccessToken()
    localStorage.setItem('accesstoken','d855adf11211f99af9b2a4271413c43cd4618ae9')
    if(this.username=="sid" && this.password=="sid"){
      this.router.navigate(["/leadlist"]);
    }
    else{
      alert("Invalid credentials");
    }
  }


 

}
