import {Component, OnInit} from '@angular/core';
import IPokemonData from "../../core/interfaces/IPokemonData";
import {PokemonService} from "../services/pokemon.service";

@Component({
  selector: 'app-poke-card-list',
  templateUrl: './poke-card-list.component.html',
  styleUrls: ['./poke-card-list.component.sass']
})
export class PokeCardListComponent implements OnInit {

  pokemonList: IPokemonData[] = [];
  search: string = '';
  listSize = 0;
  offset = 0;

  constructor(private pokemonService: PokemonService) {
  }

  searchChanged(value: string) {
    this.search = value;
  }

  listSizeChanged(value: number) {
    this.listSize = value;
  }

  offsetChanged() {
    this.offset = this.listSize;
  }

  filterPokemons(pokemons: IPokemonData[]): IPokemonData[] {
    if (!this.search) {
      return this.pokemonList.slice(this.offset, this.offset + 50);
    }
    return pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(this.search) || pokemon.id.toLowerCase().includes(this.search)).slice(this.offset, this.offset + 50);
  }

  ngOnInit() {
    this.pokemonList = this.pokemonService.getPokemonMockData();
  }
}
