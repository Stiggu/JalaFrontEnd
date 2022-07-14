import {Component, EventEmitter, Input, Output} from '@angular/core';
import PokemonListData from "../../interfaces/PokemonListData";

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
})
export class SearchBarComponent<T> {

  @Input()
  pokemons!: T[];
  @Input()
  searchKey!: Array<keyof T>;
  search: string = '';
  @Output() searchChanged: EventEmitter<T[]> = new EventEmitter<T[]>();

  searchPokemon(value: string) {
    this.search = value;
    const searchResults: T[] = [];
    for (let key of this.searchKey) {
      const results = this.pokemons.filter((poke: any) => poke[key].toString().includes(this.search))
      searchResults.push(...results);
    }
    this.searchChanged.emit(searchResults);
  }
}
