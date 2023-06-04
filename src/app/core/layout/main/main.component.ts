import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  nameField: string;
  userName: string;
  visible: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  getName(event: any) {
    this.nameField = event.target.value;
    this.userName = '';
  }

  setVisibility(visible: any){
    this.visible = visible
  }
}
