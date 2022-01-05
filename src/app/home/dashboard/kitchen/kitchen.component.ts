import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.css']
})
export class KitchenComponent implements OnInit {

  led_stage :string;
  imagePathLamp = 'https://img.icons8.com/external-those-icons-lineal-those-icons/24/000000/external-light-cars-components-those-icons-lineal-those-icons.png';
  imagePathFan = 'https://img.icons8.com/ios-filled/30/000000/ceiling-fan-off.png';
  lampStatus ='OFF';
  fanStatus= 'OFF';
  
  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
    // this.getStatus();
    // setInterval(() => {
    // this.getStatus(); 
    // }, 1000);
  }
 
  clickOnKitchenLamp(){ 
   
    this.apiService.turnOn('light1-on').subscribe((res:any)=>{ 
      if(res == 'OK'){
        this.imagePathLamp = 'https://img.icons8.com/external-those-icons-lineal-color-those-icons/24/000000/external-light-cars-components-those-icons-lineal-color-those-icons.png';
        this.lampStatus = 'RUNNING';
      }else{
        console.log('Exception when call  api change lamp status!');
      }
    });
  }

  clickOffKitchenLamp(){ 
    this.apiService.turnOff('light1-off').subscribe((res:any)=>{
      if(res == 'OK'){
        this.imagePathLamp = 'https://img.icons8.com/external-those-icons-lineal-those-icons/24/000000/external-light-cars-components-those-icons-lineal-those-icons.png';
        this.lampStatus = 'OFF';

      }else{
        console.log('Exception when call  api change lamp status!');
      }
    });
  }

  clickOnKitchenFan(){ 
    this.apiService.turnOn('fan-4-on').subscribe((res:any)=>{
      console.log('fan1-on: '+res);

      if(res == 'OK'){
        this.imagePathFan = 'https://img.icons8.com/ultraviolet/30/000000/ceiling-fan-on.png'
        this.fanStatus = 'ON';
      }
      console.log("clicked TB2 On ");
    });
  }

  clickOffKitchenFan(){ 
    this.apiService.turnOff('fan-4-off').subscribe((res:any)=>{
      console.log('fan1-off: '+res);
      if(res == 'OK'){
        this.imagePathFan = 'https://img.icons8.com/ios-filled/30/000000/ceiling-fan-off.png';
        this.fanStatus ='OFF';
      }
      console.log("clicked TB2 off");
    });
  }

  clickOnKitchenTB(){ 

    this.apiService.turnOn('').subscribe((res:any)=>{
      this.led_stage = res;
      console.log("clicked TB3 On ");
    });
  }

  clickOffKitchenTB(){ 

    this.apiService.turnOff('').subscribe((res:any)=>{
      this.led_stage = res;
      console.log("clicked TB3 off");
    });
  }


  getStatus(){ 

    this.apiService.getLedStage().subscribe((res:any)=>{
      var words = res.split(',');
      let currentLampStatus =  words[2];
      let currentFanStatus = words[8];
      if(currentLampStatus == '0'){
        this.lampStatus = 'OFF';
        this.imagePathLamp = 'https://img.icons8.com/external-those-icons-lineal-those-icons/24/000000/external-light-cars-components-those-icons-lineal-those-icons.png';
      }else{
        this.lampStatus = 'RUNNING';
        this.imagePathLamp = 'https://img.icons8.com/external-those-icons-lineal-color-those-icons/24/000000/external-light-cars-components-those-icons-lineal-color-those-icons.png';
      }
      if(currentFanStatus == '0'){
        this.imagePathFan = 'https://img.icons8.com/ios-filled/30/000000/ceiling-fan-off.png';
        this.fanStatus = 'OFF';
      }else{
        this.imagePathFan = 'https://img.icons8.com/ultraviolet/30/000000/ceiling-fan-on.png'
        this.fanStatus = 'ON';
      }
    });
    
  }

}
