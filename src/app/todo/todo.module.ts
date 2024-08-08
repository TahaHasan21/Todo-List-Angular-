import { NgModule } from '@angular/core';
import { CommonModule, Time } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class Todo { 

  title : string = '';
  desc : string = '';
  dueDate!: string;
  dueTime!: string;

}
