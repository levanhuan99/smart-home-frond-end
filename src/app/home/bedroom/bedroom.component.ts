import { Component, OnInit } from '@angular/core';
import {LightService} from '../../services/services.service';
@Component({
  selector: 'app-bedroom',
  templateUrl: './bedroom.component.html',
  styleUrls: ['./bedroom.component.css']
})
export class BedroomComponent implements OnInit {

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
