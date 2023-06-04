import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todoListData: any | [] = [];
  constructor() {}
}
