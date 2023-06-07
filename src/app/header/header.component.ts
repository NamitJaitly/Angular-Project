import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  visisble: boolean;

  @Input() UserName: string;

  @Output() booleanEvent = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {}

  showInput() {
    this.visisble = !this.visisble;
    this.booleanEvent.emit(this.visisble)
  }
}
