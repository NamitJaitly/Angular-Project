import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MasterService } from '../../service/master.service';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
// import {todopopup} from '../../../../shared/todo-popup';
import {TodoPopupComponent} from '../../../../shared/todo-popup/todo-popup.component';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss'],
})
export class AddTodoComponent implements OnInit {
  addTodo: FormGroup;
  listTodo: any;

  constructor(private form: FormBuilder, 
    private todoRules: MasterService,
    public _dialog: MatDialog) {
      this.listTodo = this.todoRules.todoListData
    }

  ngOnInit() {
    this.addTodo = this.form.group({
      taskName: ['', Validators.required],
      taskEnd: ['', Validators.required],
    });
    console.log(this.addTodo);

    // this.addTodo
  }

  onSubmit() {
    if (this.addTodo.valid) {
      this.todoRules.todoListData.push(this.addTodo.value);
      this.addTodo.reset();
    } else {
      alert('Fill All Required Fields!');
    }
  }
  showList(){
    const showTodoPopup = this._dialog.open(TodoPopupComponent, {
      height: 'auto',
      width: '539px',
      data: {
        todoList: this.todoRules.todoListData
      }
    });
    showTodoPopup.afterClosed().subscribe(res => {
      
    })
  }
}
