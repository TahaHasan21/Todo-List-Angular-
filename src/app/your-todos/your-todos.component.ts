import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo } from '../todo/todo.module';

@Component({
  selector: 'app-your-todos',
  templateUrl: './your-todos.component.html',
  styleUrls: ['./your-todos.component.css']
})
export class YourTodosComponent implements OnInit {

  todos: Todo[] = [];

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todos = this.todoService.getTodos(); // Update the todos array
  }

  removeTodo(index: number): void {
    this.todoService.removeTodo(index);
    this.todos = this.todoService.getTodos(); // Refresh the list
  }

}
