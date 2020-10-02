import {Component, OnInit} from '@angular/core';
import {LocalCounterService} from './services/local-counter.service';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {MyValidators} from './my.validators';
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
export class AppComponent implements  OnInit{
  form: FormGroup;
  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [
        Validators.email,
        Validators.required,
        MyValidators.restrictedEmail,
      ], [
        MyValidators.uniqEmail
      ]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
      address: new FormGroup({
        country: new FormControl('by'),
        city: new FormControl('Минск', Validators.required)
      }),
      skills: new FormArray([])
    });
  }
  setCapital = () => {
    const cityMap = {
      ru: 'Москва',
      ua: 'Киев',
      by: 'Минск'
    };
    const country = this.form.get('address').get('country').value;
    const city = cityMap[country];
    this.form.patchValue({address: {city}});
  }
  addSkill = () => {
    const control = new FormControl('', Validators.required);
    (this.form.get('skills') as FormArray).push(control);
  }

  submit(): void {
    if (this.form.valid) {
      //
    }
    console.log('form:', this.form);
    const formData = {...this.form.value};
    console.log('formdata:', formData);
    this.form.reset();
  }
}
