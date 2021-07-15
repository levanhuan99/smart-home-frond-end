import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class LightService {

  private esp8266_api:string = environment.API_URL;

  constructor(private http: HttpClient) { }

  changeLedStatus(apiPostfix:string): Observable<any> {
    return this.http.get<any>(this.esp8266_api+apiPostfix);
  }

}
