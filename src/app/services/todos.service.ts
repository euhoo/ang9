import {Injectable} from '@angular/core';
import {HttpClient, HttpEventType, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, delay, map, tap} from 'rxjs/operators';

export type Todo = {
  completed: boolean;
  id?: number;
  title: string;
};

@Injectable({providedIn: 'root'})
export class TodosService {

  constructor(private http: HttpClient) {
  }

  addTodo = (todo: Todo): Observable<Todo> => this.http.post<Todo>('https://jsonplaceholder.typicode.com/todos', todo, {
    headers: new HttpHeaders({
      MyCustomHeader: Math.random().toString()
    })
  })

  fetchTodo = (): Observable<Todo[]> => {
    const params = new HttpParams()
      .append('_limit', '4')
      .append('custom', 'anything');
    return this.http
      .get<Todo[]>('https://jsonplaceholder.typicode.com/todos', {
        // params: new HttpParams().set('_limit', '3')
        params,
        observe: 'response'
      })
      .pipe(
        map(response => response.body),
        delay(500),
        catchError(error => {
          console.log('Error: ', error.message);
          return throwError(error);
        })
      );
  }

  removeTodo = (id: number): Observable<any> => this.http
    .delete<void>(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      observe: 'events'
    })
    .pipe(
      tap(event => {
        if (event.type === HttpEventType.Sent) {
          console.log('Sent', event);
        }
        if (event.type === HttpEventType.Response) {
          console.log('Response', event);
        }
      })
    )

  complete = (id: number): Observable<Todo> => this.http
    .put<Todo>(`https://jsonplaceholder.typicode.com/todos/${id}`, {completed: true}, {
      responseType: 'json'
    })
}
