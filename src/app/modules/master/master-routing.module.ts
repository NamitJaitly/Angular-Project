import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterComponent } from './components/master/master.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { AuthGuard } from 'src/app/core/authGuard/auth.guard';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', component: MasterComponent },
  {
    path: 'add',
    component: AddTodoComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MasterRoutingModule {}
