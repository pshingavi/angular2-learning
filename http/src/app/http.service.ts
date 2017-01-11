import { Context } from 'vm';
import { Headers, Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';

@Injectable()
export class HttpService {

  constructor(private http: Http) { }

  getData() {
    return this.http.get('https://angular2-2e152.firebaseio.com/title.json')  // returns an Observable
      .map((response: Response) => response.json());  // Operator to transform response to js body object and return a new Observable
  }

  sendData(user: any) {
    const body = JSON.stringify(user);  // Stringify the body payload to send string text
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('https://angular2-2e152.firebaseio.com/data.json', body, {headers: headers})  // return Observable post(url, body, options)
      .map((data: Response) => data.json());
  }

  getOwnData() {
    return this.http.get('https://angular2-2e152.firebaseio.com/data.json')  // returns an Observable
      .map((response: Response) => response.json());  // Operator to transform response to js body object and return a new Observable
  }

}
