import { Injectable } from '@angular/core';
import * as Rx from 'rxjs/Rx';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LightWebsocketService {

  constructor() { }

  private subject: Rx.Subject<MessageEvent>;

  public connect(url:string):Rx.Subject<MessageEvent>{
    if (!this.subject) {
      this.subject = this.create(url);
      console.log("Successfully connected: " + url);
    }
    return this.subject;
  }

  // public requestToServerEsp8266(urlStatus:string){
  //   var websocket;
  //   websocket = new WebSocket(this.esp8266_websocket_url);
  //   websocket.send(urlStatus);
  // }


  private create(url:string): Rx.Subject<MessageEvent> {
    let ws = new WebSocket(url);

    let observable = Rx.Observable.create((obs: Rx.Observer<MessageEvent>) => {
      ws.onmessage = obs.next.bind(obs);
      ws.onerror = obs.error.bind(obs);
      ws.onclose = obs.complete.bind(obs);
      return ws.close.bind(ws);
    });
    let observer = {
      next: (data: Object) => {
        if (ws.readyState === WebSocket.OPEN) {
          ws.send(JSON.stringify(data));
        }
      }
    };
    return Rx.Subject.create(observer, observable);
  }
}
