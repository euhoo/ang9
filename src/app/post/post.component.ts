import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  DoCheck,
  ElementRef, EventEmitter,
  OnChanges, OnDestroy, Output,
  SimpleChanges, ViewEncapsulation
} from '@angular/core';
import {Component, ContentChild, Input, OnInit} from '@angular/core';
import {Post} from '../app.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnDestroy{

  @Input() data: Post;
  @Output() onRemove = new EventEmitter<number>();
  @ContentChild('info', {static: true}) infoRef: ElementRef;

  removePost = () => {
    this.onRemove.emit(this.data.id);
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }
}
