import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Weather } from '../model/weather';
import { ApiService } from '../services/api.service';
// import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

   weather:any;
   temp :number;
   feels_like :number;
   humidity :string;
   speed :string;
  //  currentDate :Date;

   private api_weather:string = environment.API_WEATHER;
  
  constructor(private apiService:ApiService,private http: HttpClient) {
    this.getWeather();
    // this.currentDate = new Date();
   }
 
  ngOnInit(): void {
  }

  getWeather(){
    this.http.get<any>(this.api_weather).subscribe(res =>{
      console.log(res);
      let jsonData =res;
      //let weatherInfor = new Weather(jsonData.main.temp,jsonData.main.feels_like,jsonData.main.humidity,jsonData.wind.speed);
      this.temp = Math.round(jsonData.main.temp-273.15);
      this.feels_like = Math.round(jsonData.main.feels_like-273.15);
      this.humidity = jsonData.main.humidity;
      this.speed = jsonData.wind.speed;
  });

  }
}
