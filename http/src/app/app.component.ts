import { Response } from '@angular/http';
import { HttpService } from './http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'http-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private httpService: HttpService) {}

  ngOnInit() {  // Do heavy lifting here instead in the constructor
    this.httpService.getData()  // get observable
      .subscribe(  // tell angular to send request and listen
        // callback 1 - data comes back
        (data: any) => {
          console.log(data);
        }
        // callback 2 - when error
        // callback 3 - complete request
      );
  }

  onSubmit(username: string, email:string) {
    this.httpService.sendData({username: username, email: email})
      .subscribe(
        (data: any) => {
          console.log(data);
        }
      );
  }
}
