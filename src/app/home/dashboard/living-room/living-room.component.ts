import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-living-room',
  templateUrl: './living-room.component.html',
  styleUrls: ['./living-room.component.css']
})
export class LivingRoomComponent implements OnInit {

  led1_stage :string;
  imagePathLamp1 = 'https://img.icons8.com/external-those-icons-lineal-those-icons/24/000000/external-light-cars-components-those-icons-lineal-those-icons.png';
  imagePathFan1 = 'https://img.icons8.com/ios-filled/30/000000/ceiling-fan-off.png';
  lampStatus ='OFF';
  fanStatus= 'OFF';

  constructor(private apiService:ApiService) { }


  ngOnInit(): void {
  }
clickOnLamp1(){ 
   
    this.imagePathLamp1 = 'https://img.icons8.com/external-those-icons-lineal-color-those-icons/24/000000/external-light-cars-components-those-icons-lineal-color-those-icons.png';
    this.lampStatus = 'RUNNING';
    this.apiService.turnOn('light1-on').subscribe((res:any)=>{ 
      console.log('light1-on: '+res);
      // if(res == 'OK'){
       
      // }
      console.log("clicked TB1 On ");
    });
  }

  clickOffLamp1(){ 
    this.imagePathLamp1 = 'https://img.icons8.com/external-those-icons-lineal-those-icons/24/000000/external-light-cars-components-those-icons-lineal-those-icons.png';
    this.lampStatus = 'OFF';

    this.apiService.turnOff('light1-off').subscribe((res:any)=>{
      console.log('light1-off: '+res);

      // if(res=='OK'){
      
      // }
      console.log("clicked TB1 off");
    });
  }
  clickOnFan1(){ 
    this.imagePathFan1 = 'https://img.icons8.com/ultraviolet/30/000000/ceiling-fan-on.png'
    this.fanStatus = 'RUNNING';
    // this.apiService.turnOn('fan1-on').subscribe((res:any)=>{
    //   console.log('fan1-on: '+res);

    //   if(res == 'OK'){
    //     this.imagePathFan1 = 'https://img.icons8.com/ultraviolet/30/000000/ceiling-fan-on.png'

    //   }
    //   console.log("clicked TB2 On ");
    // });
  }

  clickOffFan1(){ 
    this.imagePathFan1 = 'https://img.icons8.com/ios-filled/30/000000/ceiling-fan-off.png';
    this.fanStatus = 'OFF';
    // this.apiService.turnOff('fan1-off').subscribe((res:any)=>{
    //   console.log('fan1-off: '+res);
    //   if(res == 'OK'){
    //     this.imagePathFan1 = 'https://img.icons8.com/ios-filled/30/000000/ceiling-fan-off.png';

    //   }
    //   console.log("clicked TB2 off");
    // });
  }

  clickOnTB3(){ 

    this.apiService.turnOn('').subscribe((res:any)=>{
      this.led1_stage = res;
      console.log("clicked TB3 On ");
    });
  }

  clickOffTB3(){ 

    this.apiService.turnOff('').subscribe((res:any)=>{
      this.led1_stage = res;
      console.log("clicked TB3 off");
    });
  }


  getStatus(){ 
    this.apiService.getLedStage().subscribe((res:any)=>{
      if(res == 'LOW'){
        this.led1_stage = 'OFF';

      }else if(res == 'HIGH'){
        this.led1_stage = 'ON';

      }else{
        this.led1_stage = 'UNKNOWN';

      }
      console.log("clicked");
    });
    
  }
}
