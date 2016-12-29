import { LogService } from './log.service';
import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  private data: string[] = [];

  constructor(private logService: LogService) {}

  addData(input: string) {
    this.data.push(input);
    this.logService.writeToLog("Input added: " + input);
  }

  getData() {
    return this.data;
  }

}
