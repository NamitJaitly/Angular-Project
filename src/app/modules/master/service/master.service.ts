import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MasterService {
  
  todoListData: any | [] = [];

  private UserData = new BehaviorSubject<any[]>([{}]);

  constructor() {}

  setData(data: any) {
    this.UserData.next(data);
  }

  getData() {
    return this.UserData.asObservable();
  }
}
