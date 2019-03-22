import { Component, OnInit } from '@angular/core';
import { LoginserviceService } from '../loginservice.service';
import { NgForm } from '@angular/forms';
import {Leads} from '../leads';
@Component({
  selector: 'app-leadform',
  templateUrl: './leadform.component.html',
  styleUrls: ['./leadform.component.css']
})
export class LeadformComponent implements OnInit {
model:any={}

data:object[];
arr:any[]=[];
variable:any={}

  constructor(private formService:LoginserviceService) { }

  
  ngOnInit() {
    /*
    const customerData = [
      { ssn: "444-44-4444", name: "Bill", age: 35, email: "bill@company.com" },
      { ssn: "555-55-5555", name: "Donna", age: 32, email: "donna@home.org" },
      {ssn:"454-55-4435", name:"siddhesh", age:23, email:"siddhesh345@gmail.com"}
    ];
    var db;
    var request=indexedDB.open("dealer",1);
    request.onerror=function(){
      console.log("error");
    }
    request.onsuccess=function(){
      console.log("success");
    }
    request.onupgradeneeded=function(){
      var db = request.result;
      var store = db.createObjectStore("dealer", {keyPath: "ssn"});
      store.createIndex("email", "email", { unique: true });
      store.transaction.oncomplete=function(){
        var dealerobj=db.transaction("dealer","readwrite").objectStore("dealer");
       customerData.forEach(function(dealing){
       dealerobj.add(dealing);
       });
      }
    }
    */
  }
  

  
  onSubmit(formValues:any):void{
const newLeads:Leads=<Leads>formValues;
this.formService.postData(newLeads).subscribe((data:Leads)=>console.log(data),(err:any)=>console.log(err));
/*
var name=data.value.firstName;
var lname=data.value.lname;
var dob=data.value.DOB;
var ctct=data.value.Contact;
var add=data.value.Add;
var add2=data.value.Add2;
var city=data.value.City;
var state=data.value.State;
var pin=data.value.Pin;
var loanp=data.value.loanp;
var loanamt=data.value.loanamt;

var variable={
  "firstName":name,
  "lname":lname,
  "DOB":dob,
  "Contact":ctct,
  "Add":add,
  "Add2":add2,
  "City":city,
  "State":state,
  "Pin":pin,
  "loanp":loanp,
  "loanamt":loanamt
}
//this.arr=form.value;
//console.log(this.arr);
*/




  }
  
  }
  


