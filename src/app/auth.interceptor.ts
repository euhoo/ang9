import {HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

export class AuthInterceptor implements HttpInterceptor{
  intercept(reqest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Intercepted request: ', reqest);
    const cloned = reqest.clone({
      headers: reqest.headers.append('Auth', 'SOME RANDOM TOKEN')
    });
    return next.handle(cloned).pipe(
      tap(event => {
        if (event.type === HttpEventType.Response) {
          console.log('Interceptor response event: ', event);
        }
      })
    );
  }

}
