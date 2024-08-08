import { Injectable } from '@angular/core';
import { Todo } from './todo/todo.module';


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private readonly storageKey = 'todos';

  constructor() { 
    // this.getTodo();
  }

  getTodos() : Todo[]{
    const todos = localStorage.getItem(this.storageKey);
    return todos ? JSON.parse(todos): [];
  }

  saveToDos(todos : Todo[]) : void{
    localStorage.setItem(this.storageKey, JSON.stringify(todos));
  }

  addToDo(todo: Todo): void{
    const todos = this.getTodos();
    todos.push(todo);
    this.saveToDos(todos);
  }

  removeTodo(index: number){
    const todos = this.getTodos();
    todos.splice(index, 1);
    this.saveToDos(todos);
  }

}
