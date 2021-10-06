import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-bedroom-detail',
  templateUrl: './bedroom-detail.component.html',
  styleUrls: ['./bedroom-detail.component.css']
})
export class BedroomDetailComponent implements OnInit {

  led1_stage :string;

  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
    this.getStatus();
  }

  clickOnTB1(){ 

    this.apiService.turnLightOn(1).subscribe((res:any)=>{
      this.led1_stage = res;
      console.log("clicked TB1 On ");
    });
  }

  clickOffTB1(){ 

    this.apiService.turnLightOff(1).subscribe((res:any)=>{
      this.led1_stage = res;
      console.log("clicked TB1 off");
    });
  }
  clickOnTB2(){ 

    this.apiService.turnLightOn(2).subscribe((res:any)=>{
      this.led1_stage = res;
      console.log("clicked TB2 On ");
    });
  }

  clickOffTB2(){ 

    this.apiService.turnLightOff(2).subscribe((res:any)=>{
      this.led1_stage = res;
      console.log("clicked TB2 off");
    });
  }
  clickOnTB3(){ 

    this.apiService.turnLightOn(3).subscribe((res:any)=>{
      this.led1_stage = res;
      console.log("clicked TB3 On ");
    });
  }

  clickOffTB3(){ 

    this.apiService.turnLightOff(3).subscribe((res:any)=>{
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
