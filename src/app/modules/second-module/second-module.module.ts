import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecondModuleRoutingModule } from './second-module-routing.module';
import { TodoListComponent } from './todo-list/todo-list.component';
import { MaterialModule } from 'src/app/shared/material.module';
import { TodoService } from './todo.service';
import { ChildComponent } from './child/child.component';


@NgModule({
  declarations: [
    TodoListComponent,
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
