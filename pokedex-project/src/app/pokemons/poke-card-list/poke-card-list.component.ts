import {Component, OnInit} from '@angular/core';
import {dataPokemons, getPokemonImageUri, pokemonColorMap} from "../../utils/utils";
import IPokemonData from "../../core/interfaces/IPokemonData";
import {PokemonService} from "../services/pokemon.service";

@Component({
  selector: 'app-poke-card-list',
  templateUrl: './poke-card-list.component.html',
  styleUrls: ['./poke-card-list.component.sass']
})
export class PokeCardListComponent implements OnInit{

  pokemonList: IPokemonData[] = [];
  search: string = '';

  constructor(private pokemonService: PokemonService) {
  }

  searchChanged(value: string){
    this.search = value;
  }

  filterPokemons(pokemons: IPokemonData[]): IPokemonData[]{
    if(!this.search){
      return this.pokemonList;
    }
    return pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(this.search) || pokemon.id.toLowerCase().includes(this.search));
  }

  ngOnInit() {
    const pokemons = dataPokemons.results;
    for(let pokemon = 0; pokemon < pokemons.length; pokemon++){
      this.pokemonList.push({
        name: dataPokemons.results[pokemon].name,
        url: dataPokemons.results[pokemon].url,
        colour: Object.values(pokemonColorMap)[pokemon],
        image: this.pokemonService.getPokemonImageUri(pokemon),
        id: ("00" + (pokemon + 1).toString()).slice(-3),
      })
    }
  }
}
