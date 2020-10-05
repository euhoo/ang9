import {Component, OnInit} from '@angular/core';
import {Todo, TodosService} from './services/todos.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  todos: Todo[] = [];
  todoTitle = '';
  loading = false;
  error = '';

  constructor(private todosService: TodosService) {
  }

  ngOnInit(): void {
    this.fetchTodos();
  }

  fetchTodos = () => {
    this.loading = true;
    this.todosService.fetchTodo()
      .subscribe(response => {
        this.todos = [...this.todos, ...response];
        this.loading = false;
      }, error => {
        console.log(error.message);
        this.error = error.message
      });
  }
  addTodo = () => {
    if (!this.todoTitle.trim()) {
      return;
    }
    this.todosService
      .addTodo({title: this.todoTitle, completed: false})
      .subscribe(todo => {
        const todoWithId = {...todo, id: Date.now()};
        this.todos = [todoWithId, ...this.todos];
        this.todoTitle = '';
      });
  }
  delete = (id: number) => {
    this.todosService
      .removeTodo(id)
      .subscribe(() => {
        this.todos = this.todos.filter(todo => todo.id !== id);
      });
  }
  complete = (id: number) => {
    this.todosService.complete(id)
      .subscribe(updatedTodo => {
        this.todos.find(todo => todo.id === updatedTodo.id).completed = true;
      });
  }
}
