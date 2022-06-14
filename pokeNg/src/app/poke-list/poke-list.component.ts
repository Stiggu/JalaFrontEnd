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

  addItem(){
    if(!this.itemToAdd) return;
    this.todoList.push({
      text: this.itemToAdd,
      id: this.todoList.length,
    });
    this.itemToAdd = '';
  }

  completeItem(id: string){
    const ele: HTMLElement | null = document.getElementById(id);
    if(ele){
      ele.style.textDecoration = "line-through"
    }
  }

  deleteItem(id: number){
    this.todoList.splice(id-1, 1);
  }
}
