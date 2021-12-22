import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs-compat';
import { environment } from 'src/environments/environment';
import { Weather } from '../model/weather';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private api_weather:string = environment.API_WEATHER;
  private api_ip:string = environment.API_URL;
  constructor(private http: HttpClient) { 

  }

  turnOn(postfixApi:string):Observable<any>{
    return this.http.get<any>(this.api_ip + postfixApi);
  }
  turnOff(postfixApi:string):Observable<any>{
    return this.http.get<any>(this.api_ip + postfixApi);
  }

  
  getLedStage():Observable<any>{
    return this.http.get<any>(this.api_ip + 'get-all-status');
  }
}
