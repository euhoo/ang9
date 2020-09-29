import {Component, OnInit, ViewEncapsulation} from '@angular/core';

export interface Post {
  title: string;
  text: string;
  id?: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent implements OnInit{
  posts: Post[] = [
    {title: 'хочу выучить Ангуляр', text: 'Все еще хочу выучить', id: 1},
    {title: 'Следующий блок', text: 'про директивы и пайпы', id: 2}
  ];

  updatePosts = (post) => {
    this.posts = [post, ...this.posts];
  }
  deletePost = (id: number) => {
    console.log('id');
    this.posts = this.posts.filter(p => p.id !== id);
  }

  ngOnInit(): void {
  }
}
