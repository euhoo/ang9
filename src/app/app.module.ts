import { BrowserModule } from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';
import localeRu from '@angular/common/locales/ru';


import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {StyleDirective} from './directives/style.directive';
import { IfnotDirective } from './directives/ifnot.directive';
import {registerLocaleData} from '@angular/common';
import { MultByPipe } from './pipes/mult-by.pipe';
import { ExMarksPipe } from './pipes/ex-marks.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { AsyncPipePipe } from './pipes/async-pipe.pipe';

registerLocaleData(localeRu);

@NgModule({
  declarations: [
    AppComponent,
    StyleDirective,
    IfnotDirective,
    MultByPipe,
    ExMarksPipe,
    FilterPipe,
    AsyncPipePipe,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'ru' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
