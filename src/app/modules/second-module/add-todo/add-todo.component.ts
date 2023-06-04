import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControlName } from '@angular/forms';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss'],
})
export class AddTodoComponent implements OnInit {
  addTodo: FormGroup;

  constructor(private form: FormBuilder, private todoRules: TodoService) {
    this.addTodo = this.form.group({
      taskName: [''],
      taskEnd: [''],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if(this.addTodo.valid){
      this.todoRules.todoListData.push(this.addTodo.value);
      console.log(this.addTodo.value);
      this.addTodo.reset()
    }
    else{
      alert('Fill All Required Fields!')
    }
  }
}
