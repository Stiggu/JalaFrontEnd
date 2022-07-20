import {Component, OnInit} from '@angular/core';
import PokemonListData from "../../core/interfaces/PokemonListData";
import {PokemonService} from "../services/pokemon.service";
import {ActivatedRoute} from "@angular/router";
import {faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-poke-card-list',
  templateUrl: './poke-card-list.component.html',
  styleUrls: ['./poke-card-list.component.sass']
})
export class PokeCardListComponent implements OnInit {
  originalPokemonList!: PokemonListData[];
  pokemonList!: PokemonListData[];
  search: string = '';
  listSize = 0;
  offset = 1;
  faArrowRight = faArrowRight;
  faArrowLeft = faArrowLeft;
  generations = [1,2,3,4,7,8];

  constructor(
    private pokemonService: PokemonService,
    private activatedRoute: ActivatedRoute) {
  }
  async getGeneration(generation: number){
    this.originalPokemonList = await this.pokemonService.getPokemonByGeneration(generation);
    this.pokemonList = this.originalPokemonList;
  }

  searchChanged(value: PokemonListData[]) {
    this.pokemonList = value;
  }

  listSizeChanged(value: number) {
    this.listSize = value;
  }

  async changeOffset(offset: number) {
    this.offset += offset;
    if (this.offset <= 0) {
      this.offset = 1;
    }
    this.originalPokemonList = await this.pokemonService.getPokemonList((this.offset - 1) * 50);
    this.pokemonList = this.originalPokemonList;
  }

  ngOnInit() {
    this.activatedRoute.data.subscribe(({pokemons}) => {
      this.originalPokemonList = pokemons;
      this.pokemonList = pokemons;
    })
  }
}
