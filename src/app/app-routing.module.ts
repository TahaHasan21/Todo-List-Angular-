import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { YourTodosComponent } from './your-todos/your-todos.component';

const routes: Routes = [
  { path: '', component: TodoComponent },
  { path: 'your-todos', component: YourTodosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
