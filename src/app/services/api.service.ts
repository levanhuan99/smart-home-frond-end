import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs-compat';
import { environment } from 'src/environments/environment';
import { Weather } from '../model/weather';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private api_weather:string = environment.API_WEATHER;
  private api_ip:string = environment.API_URL;// prefix door
  private api_ip_lamp:string = environment.API_URL_LAMP;// prefix lamp
  constructor(private http: HttpClient) { 

  }

  turnOn(postfixApi:string):Observable<any>{
    return this.http.get(this.api_ip_lamp + postfixApi, {responseType: 'text'});
  }
  turnOff(postfixApi:string):Observable<any>{
    return this.http.get(this.api_ip_lamp + postfixApi, {responseType: 'text'});
  }

  getLedStage():Observable<any>{
    return this.http.get(this.api_ip_lamp + 'get-all-status',{responseType: 'text'})
  }
}
