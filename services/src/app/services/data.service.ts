//import { Injectable } from '@angular/core';

//@Injectable()
export class DataService {
  private data: string[] = [];

  addData(input: string) {
    this.data.push(input);
  }

  getData() {
    return this.data;
  }

}
