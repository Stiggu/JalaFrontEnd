import { Component } from '@angular/core';
import {dataPokemons} from "../../utils/utils";
import IPokemonData from "../../shared/IPokemonData";

@Component({
  selector: 'app-poke-card-list',
  templateUrl: './poke-card-list.component.html',
  styleUrls: ['./poke-card-list.component.sass']
})
export class PokeCardListComponent {

  pokemonList: IPokemonData[] = [];

  constructor() {
    this.pokemonList = dataPokemons.results;
  }
}
