import { Injectable, OnInit } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Leads} from './leads';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService{

  public data:any;
  loading: boolean;
resource:any={};
datas:Object[];
arr:any={};
  constructor(private http:HttpClient,) { }
  getAccessToken(){
    return this.http.post('http://192.168.1.52:82/workflow/oauth2/token',{
      "grant_type":"password",
"scope":"*",
"client_id":"ODTOBVMCTNYLVNEAKPZQOLNZAQQPWGZY",
"client_secret":"2422502355c80f706438b43072463132",
"username":"admin",
"password":"root123"

    }
     ).subscribe(data =>{
      console.log(data)
    })

  }


  postData(newLeads:Leads){

   var t=localStorage.getItem("accesstoken");
   


    return this.http.post('http://192.168.1.52:82/api/1.0/workflow/cases',{
      "pro_uid": "8199010255c85e882e7d3c1070484549",
      "tas_uid": "6318350615c865b97e6d6d0011811623",
    
    },{
      headers:new HttpHeaders({
        
       
        "Content-Type": "application/json",
        "Authorization": "Bearer " + t
      })
    })

    
  }

    
  
    leadList(){
      var t=localStorage.getItem("accesstoken");
      return this.http.post('http://192.168.1.52:82/api/1.0/workflow/cases',{
        "pro_uid":"2144165035c90857bc85956028826020",
        "tas_uid":"3837585445c9085a666e502008267764"
      },{
        headers:new HttpHeaders({
          "Content-Type": "application/json",
          "Authorization": "Bearer " + t
        })
      }).subscribe(list=>console.log(list));
       

    }

    routeCase(){
      var t=localStorage.getItem("accesstoken");
      return this.http.put('http://192.168.1.52:82/api/1.0/workflow/cases/6058818655c947ef125bba1098991897/route-case',{
        "del_index":"1",

      },{
        headers:new HttpHeaders({
          "Content-Type": "application/json",
          "Authorization": "Bearer " + t
        })
      }).subscribe(result=>{console.log(result);
        
      },
       error=>{
         console.log("error");
       }
        );
       
      }
    
    getLeadlist(){
      
      var t=localStorage.getItem("accesstoken");
      return this.http.get('http://192.168.1.52:82/api/1.0/workflow/case/6058818655c947ef125bba1098991897/1/variable/caseList',{
        headers:new HttpHeaders({
          "Content-Type": "application/json",
          "Authorization": "Bearer " + t
        })
      }).subscribe((leadresp:Response)=>
        {console.log(leadresp)
          
        }
        )
        
    
        
    }
}
