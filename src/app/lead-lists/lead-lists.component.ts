import { Component, OnInit } from '@angular/core';
import { Router }from '@angular/router';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { LoginserviceService } from './../loginservice.service';
@Component({
  selector: 'app-lead-lists',
  templateUrl: './lead-lists.component.html',
  styleUrls: ['./lead-lists.component.css']
})
export class LeadListsComponent implements OnInit {
 public data:any;
  public model:any;
  public searchterm:string = "";
  public statusFilter:string = "all";
  public statuses:any = ["Ongoing", "Pending", "Okay"];

  constructor(private router:Router,private http:HttpClient,private leadservice:LoginserviceService) { }
 


  ngOnInit() {
    this.model=[
      {
        name:'siddhesh',
        application_id:12343,
        status:'Ongoing'
       },
       {
        name:'prince',
        application_id:14434,
        status:'Pending'
       },
       {
        name:'shubham',
        application_id:22342,
        status:'Pending'
       },
       {
        name:'shubham',
        application_id:22342,
        status:'Okay'
       }
      
    ]
    this.leadservice.leadList();
    this.leadservice.routeCase();
    this.leadservice.getLeadlist();
    


  }
  DoFilter() {
    var ResultsArray = [];

    /*
    let This = this;
    this.model.forEach(function (obj) {
        if (
          (This.searchterm == '' || obj.name.indexOf(This.searchterm) > -1) &&
          (This.statusFilter == 'all' || This.statusFilter == obj.status)
          ) {
          ResultsArray.push(obj);
        }
    });
    */

   for(var i = 0; i < this.model.length; i++) {
    var obj = this.model[i];  
    if (
        (this.searchterm == '' || obj.name.indexOf(this.searchterm) > -1) &&
        (this.statusFilter == 'all' || this.statusFilter == obj.status)
        ) {
        ResultsArray.push(obj);
      }
  }

    return ResultsArray;
  }


   
 
  
  leadForm(){

    this.router.navigate(["/leadform"]);
  }


}
