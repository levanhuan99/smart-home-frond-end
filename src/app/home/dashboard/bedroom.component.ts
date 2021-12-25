import { Attribute, Component, OnInit } from '@angular/core';
import { LightWebsocketService } from 'src/app/services/light-websocket.service';

import { environment } from 'src/environments/environment';
import {LightService} from '../../services/services.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-bedroom',
  templateUrl: './bedroom.component.html',
  styleUrls: ['./bedroom.component.css']
})
export class BedroomComponent implements OnInit {

  private lightStatus:boolean = false;



  public currebtStatus:string;

  constructor(private lightService: LightService,  private router : Router) { }


  ngOnInit(): void {

  }

 
  ChangeLightStatus():void {

    console.log('start calling api!'); 
    if(this.lightStatus==false){
      this.lightService.changeLedStatus("led-on").subscribe(resp=>{
        this.lightStatus=true;
        console.log(" light on now");
      });
      return;

    }else{
      this.lightService.changeLedStatus("led-off").subscribe(resp=>{
        this.lightStatus=false;
        console.log("light off now");
      });
      return;
    }
  }


  goToBedRoom(){
    console.log("clicked!");
    this.router.navigateByUrl('home/bedroom');
  } 
  goToBedRoom1(){
    console.log("clicked!");
    this.router.navigateByUrl('home/bedroom1');
  } 

  goToLivingRoom(){
    console.log("clicked!");
    this.router.navigateByUrl('home/living-room');
  } 
  goToKitcken(){
    console.log("clicked!");
    this.router.navigateByUrl('home/kitchen');
  } 


  //demo websocket
  // createConnectToServer(){

  //   console.log('stating connect to server throught websocket');

  //   this.websocket.onopen = function(evt) { console.log('websock open'); };
  //   this.websocket.onclose = function(evt) { console.log('websock close'); };
  //   this.websocket.onerror = function(evt) { console.log(evt); };
  //   this.websocket.onmessage  = function(evt){
  //     console.log(evt);
  //     if(evt.data ==='LED is turned OFF'){
  //       console.log("message is coming: "+evt.data);
  //     }else if(evt.data ==='LED is turned ON'){
  //       console.log("message is coming: "+evt.data);

  //     }else{
  //       console.log('unknown status');
  //     }
  //   }
  // }
  // change(){
  //   const element = document.getElementsByClassName(this.currebtStatus) as HTMLCollectionOf<HTMLElement>;

  //  }

  // ChangeLightStatusWebsocket(){
  //   console.log(this.lightStatus);
  //   if(this.lightStatus==false){
      
  //     this.websocket.send('on');
  //       this.lightStatus=true;
  //       console.log(" light on now");
  //   }else{
  //     this.websocket.send('off');
  //       this.lightStatus=false;
  //       console.log("light off now");
  //   }
  // }

//end

}
