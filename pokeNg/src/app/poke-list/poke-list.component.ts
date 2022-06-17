import { Component } from '@angular/core';

export interface ITodoItems {
  text: string,
  done: boolean
}

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.sass']
})
export class PokeListComponent {

  todoList: ITodoItems[] = [];
  itemToAdd: string = '';

  addItem(){
    if(!this.itemToAdd) return;
    this.todoList.push({
      text: this.itemToAdd,
      done: false,
    });
    this.itemToAdd = '';
  }

  completeItem(id: number){
    this.todoList[id].done = !this.todoList[id].done;
  }

  deleteItem(id: number){
    this.todoList.splice(id-1, 1);
  }
}
