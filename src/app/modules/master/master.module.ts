import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterRoutingModule } from './master-routing.module';
import { MasterComponent } from './components/master/master.component';
import { EmailComponent } from './components/email/email.component';
import { SetPasswordComponent } from './components/set-password/set-password.component';
import { MaterialModule } from 'src/app/shared/material.module';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { MasterService } from './service/master.service';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    MasterComponent,
    EmailComponent,
    SetPasswordComponent,
    AddTodoComponent,
    LoginComponent,
   
  ],
  imports: [
    CommonModule,
    MasterRoutingModule,
    MaterialModule
  ],
  providers: [
    MasterService
  ]
})
export class MasterModule { }
