import {Component, EventEmitter, Output,} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-counter',
  template:`Counter: {{counter}}`
})
export class CounterComponent {
  counter = 0
  public form: FormGroup

  constructor(public fb: FormBuilder) {
    this.form = fb.group({
      login: ['', Validators.required],
      email: ['']
    })
  }

  @Output() counterEmmiter = new EventEmitter<number>()
  increment = () => {
    this.counter++
    this.counterEmmiter.emit(this.counter)
  }
  decrement = () => {
    this.counter--
  }
}
