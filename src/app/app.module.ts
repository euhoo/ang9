import { BrowserModule } from '@angular/platform-browser';
import {LOCALE_ID, NgModule, Provider} from '@angular/core';
import localeRu from '@angular/common/locales/ru';


import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {registerLocaleData} from '@angular/common';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AppStoreService} from './services/app-store.service';
import {AuthInterceptor} from './auth.interceptor';

registerLocaleData(localeRu);
const INTERCEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthInterceptor,
  multi: true,
};

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'ru' },
    AppStoreService,
    INTERCEPTOR_PROVIDER,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
