import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecondModuleRoutingModule } from './second-module-routing.module';
import { TodoListComponent } from './todo-list/todo-list.component';
import { MaterialModule } from 'src/app/shared/material.module';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { TodoService } from './todo.service';
import { ChildComponent } from './child/child.component';


@NgModule({
  declarations: [
    TodoListComponent,
    AddTodoComponent,
    ChildComponent
  ],
  imports: [
    CommonModule,
    SecondModuleRoutingModule,
    MaterialModule
  ],
  providers: [TodoService]
})
export class SecondModuleModule { }
