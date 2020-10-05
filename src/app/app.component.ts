import {Component} from '@angular/core';
import {LocalCounterService} from './services/local-counter.service';
export interface Post {
  title: string;
  text: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [LocalCounterService]
})
export class AppComponent{
  appState = 'on';
  handleChange = () => {
    console.log(this.appState);
  }
}
