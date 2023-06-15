import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.scss']
})
export class MasterComponent implements OnInit {

  constructor() { }
  firstName: string;
  lastName: string;
  setUserName: string;
  hide: boolean = false
  visible: boolean = false

  ngOnInit() {
  }
  setFirstName(event: any){
    this.firstName = event.target.value
  }
  setLastName(event: any){
    this.lastName = event.target.value
  }

  submitName(){
    if(this.firstName && this.lastName){
      this.setUserName = this.firstName ? this.firstName : '' + ' ' + this.lastName ? this.firstName : ''
      this.firstName = '';
      this.lastName = '';
      this.hide= true
    }
    else{
      alert('Please enter complete User Name.')
    }
  }

  setVisibility(visible: any){
    this.visible = visible
  }
}
