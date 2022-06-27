import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import IPokemonData from "../../core/interfaces/IPokemonData";

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private api = 'https://pokeapi.co/api/v2';
  constructor(private http: HttpClient) { }

  getPokemonList(offset: number = 0, limit: number = 25){
    return this.http.get(`${this.api}/pokemon?limit=${limit}&offset=${offset}`) as Observable<{ results: IPokemonData[] }>
  }

  getPokemonImageUri (id: number): string {
    const imageId = ('00' + (id + 1)).slice(-3);
    return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${imageId}.png`;
  }
}
