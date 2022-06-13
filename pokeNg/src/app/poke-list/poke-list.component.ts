import { Component } from '@angular/core';

export interface ITodoItems {
  text: string,
  id: number,
}

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.sass']
})
export class PokeListComponent {

  todoList: ITodoItems[] = [];
  itemToAdd: string = '';

  constructor() {
    this.todoList = [];
  }

  addItem(){
    if(this.itemToAdd.length === 0) return;
    this.todoList.push({
      text: this.itemToAdd,
      id: this.todoList.length,
    });
    this.itemToAdd = '';
  }
}
