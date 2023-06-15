import { Component, OnInit } from '@angular/core';
import { MasterService } from '../../service/master.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-set-password',
  templateUrl: './set-password.component.html',
  styleUrls: ['./set-password.component.scss'],
})
export class SetPasswordComponent implements OnInit {
  constructor(private service: MasterService, private router: Router) {}
  recieveData: any;

  ngOnInit() {
    this.service.getData().subscribe((data) => (this.recieveData = data));
  }
  showTodo() {
    return this.router.navigate(['/add']);
  }
}
