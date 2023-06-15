import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MasterService } from '../../service/master.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss'],
})
export class EmailComponent implements OnInit {
  constructor(private service: MasterService) {}
  userData = {
    userName: '',
    email: '',
    phoneNumber: '',
  };
  @Input() userName: string;
  @Output() booleanEvent = new EventEmitter<boolean>();
  ngOnInit(): void {}

  setEmail(event: any) {
    this.userData.email = event.target.value;
  }
  setPhone(event: any) {
    this.userData.phoneNumber = event.target.value;
  }
  saveData() {
    this.userData.userName = this.userName;
    this.service.setData(this.userData);
    this.booleanEvent.emit(true);
  } 
}
