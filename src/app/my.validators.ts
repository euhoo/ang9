import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';

type AnswerType_T = {[key: string]: boolean};
export class MyValidators {
  static restrictedEmail(control: FormControl): AnswerType_T {
    if (['v@mail.ru', 'test@mail.ru'].includes(control.value)) {
      return {restrictedEmail: true};
    }
    return null;
  }
  static uniqEmail(control: FormControl): Promise<AnswerType_T> | Observable<AnswerType_T> {
    return new Promise(resolve => {
      setTimeout(() => {
        if (control.value === 'async@mail.ru') {
          resolve({uniqEmail: true});
        } else {
          resolve(null);
        }
      }, 1000);
    });
  }
}
