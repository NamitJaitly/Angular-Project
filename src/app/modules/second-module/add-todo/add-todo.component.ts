import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss'],
})
export class AddTodoComponent implements OnInit {
  addTodo: FormGroup

  constructor(
    private form: FormBuilder,
    private todoRules: TodoService) {}

  ngOnInit(){
    this.addTodo = this.form.group({
      taskName: ['',Validators.required],
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
}
