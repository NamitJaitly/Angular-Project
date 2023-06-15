import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  NgForm,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  type: string;
  show: boolean = false;
  loginForm: FormGroup;
  newFormControl: string;
  @ViewChild('templateForm', { static: false }) templateForm: any;
  templateFormModel: TempateFormModel = new TempateFormModel();
  constructor(private router: Router, private formB: FormBuilder) {}

  ngOnInit() {
    this.loginForm = this.formB.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
      rememberMe: [false],
    });
  }

  setType(event: any) {
    this.type = event.target.value;
  }

  onSubmit() {
    if (this.loginForm && this.loginForm.valid) {
      this.router.navigate(['/add']);
      console.log(this.loginForm.value, 'my form values');
      if (this.loginForm.value.rememberMe === true) {
        localStorage.setItem('user-name', this.loginForm.value.userName);
        this.loginForm.reset();
      } else {
        sessionStorage.setItem('user-name', this.loginForm.value.userName);
        this.loginForm.reset();
      }
    }
  }
  submitForm(formValue: any) {
    console.log(formValue);
  }
  showVisible() {
    this.show = !this.show;
    console.log('check', this.show);
  }
  newFormField(event: any) {
    this.newFormControl = event.target.value;
  }
  addFormField() {
    this.loginForm.addControl(
      this.newFormControl,
      new FormControl('', Validators.required)
    );
  }
  removeField(formControlName: any) {
    this.loginForm.removeControl(formControlName);
  }
}

export class TempateFormModel {
  Name: string;
  Email: string;
}
