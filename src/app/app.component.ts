import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { DataService} from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{

  username='Siddhesh'



 constructor(private swUpdate:SwUpdate){ 

 }
  ngOnInit(){
    if(this.swUpdate.isEnabled){
      this.swUpdate.available.subscribe(()=>{
if(confirm("new version available.")){
  window.location.reload();
}
      });
    }
  }

}

