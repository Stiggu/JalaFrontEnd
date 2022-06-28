import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
})
export class SearchBarComponent {
  search: string = '';
  @Output() searchChanged = new EventEmitter<string>();

  searchPokemon(value: string){
    this.searchChanged.emit(value);
  }
}
