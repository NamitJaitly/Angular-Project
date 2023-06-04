import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  todoList: any | [];
  constructor(private todorule: TodoService) {}

  ngOnInit(): void {
    this.todoList = this.todorule.todoListData;
  }
  deleteTodo(index: number){
    this.todorule.todoListData.splice(index, 1)
  }
}
