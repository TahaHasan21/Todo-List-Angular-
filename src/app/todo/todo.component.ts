import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import {Todo} from '../todo/todo.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];
  newTodo: string = '';
  newDesc: string = '';
  newDueDate: string = '';
  newDueTime: string = '';
 
  constructor(private todoService: TodoService,  private router: Router) { }

  ngOnInit(): void {
    this.refreshTodos();
  }

  refreshTodos(): void {
    this.todos = this.todoService.getTodos();
  }

  // ngOnInit(): void {
  //   this.todos = this.todoService.getTodos() || [];
  // }

  addTodo(): void {
    if (this.newTodo.trim() && this.newDesc.trim() && this.newDueDate.trim() && this.newDueTime.trim()) {
      this.todoService.addToDo({ title: this.newTodo, desc: this.newDesc, dueDate: this.newDueDate, dueTime: this.newDueTime });
      this.newTodo = '';
      this.newDesc = '';
      this.newDueDate = '';
      this.newDueTime = '';
      this.refreshTodos();
    }
  }

  navigateToYourTodos(): void {
    this.router.navigate(['/your-todos']); // Navigate to YourTodosComponent
  }


}
