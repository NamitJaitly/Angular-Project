import { Component, Inject, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MatDialogModule,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

@Component({
  selector: 'app-todo-popup',
  templateUrl: './todo-popup.component.html',
  styleUrls: ['./todo-popup.component.scss'],
})
export class TodoPopupComponent implements OnInit {
  constructor(
    public _dialog: MatDialog,
    public dialogef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.todoList = this.data.todoList;
  }

  todoList: any | [];
  ngOnInit() {}
  deleteTodo(index: number) {
    this.todoList.splice(index, 1)
  }
}
