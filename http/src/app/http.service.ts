import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class HttpService {

  constructor(private http: Http) { }

  getData() {
    return this.http.get('https://angular2-2e152.firebaseio.com/title.json');  // returns an Observable
  }

}
