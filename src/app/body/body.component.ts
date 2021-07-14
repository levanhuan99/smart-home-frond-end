import { Component, OnInit } from '@angular/core';
import {LightService} from '../services.service';


import { Observable } from 'rxjs';
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {


  private lightStatus:boolean = false;
  constructor(private lightService: LightService) { }

  ngOnInit(): void {
  }

  ChangeLightStatus() {

    console.log('start calling api!'); 
    if(this.lightStatus==false){
      this.lightService.changeLedStatus("led-on").subscribe(resp=>{
        this.lightStatus=true;
        console.log(" light on now");
      });

    }else{
      this.lightService.changeLedStatus("led-off").subscribe(resp=>{
        this.lightStatus=false;
        console.log("light off now");
      });
      
    }
  }
}
