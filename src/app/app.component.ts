import {Component} from '@angular/core';
import {Observable} from 'rxjs';

export interface Post {
  title: string;
  text: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent{
  e: number = Math.E;
  str = 'hello world';
  date: Date = new Date();
  float = 0.42;
  obj = {
    a: 1,
    b: {
      c: 2,
      d: {
        e: 3,
        f: 4
      }
    }
  };
  search = '';
  searchField = 'title';

  posts: Post[] = [
    {title: 'Beer', text: 'Самое лучшее пиво в мире'},
    {title: 'Bread', text: 'The best bread in the world'},
    {title: 'Javascript', text: 'The best language in the world'},
  ];

  p: Promise<string> = new Promise<string>(resolve => {
    setTimeout(() => {
      resolve('Promise resolved');
    }, 4000);
  });
  myDate$: Observable<Date> = new Observable<Date>(obs => {
    setInterval(() => {
      obs.next(new Date());
    }, 1000);
  });
  addPost = () => {
    this.posts.unshift({
      title: 'Angular 9',
      text: 'Text'
    });
  }
}
