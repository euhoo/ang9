import {Injectable} from '@angular/core';

type Todo = {
  completed: boolean;
  id: number;
  title: string;
  userId: number;
};
let todos: Todo[] = [];

@Injectable({providedIn: 'root'})
export class AppStoreService {

  constructor() {
  }
  log = () => {
    console.log('Текущие todos: ', todos);
  }
  updateTodos = (newTodos: Todo[]): void => {
    todos.push(...newTodos);
    this.log();
  }
  deleteTodo = (id: number) => {
    todos = todos.filter(todo => todo.id !== id);
    this.log();
  }
}
