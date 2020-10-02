import {Injectable} from '@angular/core';
import {LogService} from './log.service';

@Injectable({providedIn: 'root'})
export class AppCounterService {
  counter = 0;

  constructor(private logService: LogService) {
  }

  increase(): void {
    this.logService.log('increasing...');
    this.counter++;
  }
  decrease = () => {
    this.logService.log('decreasing...');
    this.counter--;
  }
}
