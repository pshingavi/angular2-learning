import { Response } from '@angular/http';
import { HttpService } from './http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'http-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  items: any[];
  constructor(private httpService: HttpService) {}
  asyncString = this.httpService.getData();  // Used with async pipe

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
        },
        error => console.log(error.json())  // Handle error in subscribe
      );
  }

  onGetData() {
    this.httpService.getOwnData()
      .subscribe(
        (data) => {
          // transform object into an arrray
          const myArray = [];
          for(let key in data) {
            myArray.push(data[key]);
          }
          this.items = myArray;
        }
      );
  }
}
