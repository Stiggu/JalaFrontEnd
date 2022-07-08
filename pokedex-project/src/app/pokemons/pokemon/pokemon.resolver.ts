import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {PokemonService} from "../services/pokemon.service";
import IPokemonData from "../../core/interfaces/IPokemonData";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PokemonResolver implements Resolve<IPokemonData> {
  constructor(private pokemonService: PokemonService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IPokemonData> | Promise<IPokemonData> | IPokemonData {
    const id = route.paramMap.get('id') || "1";
    // return this.pokemonService.getPokemon(parseInt(id));
    return {
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
      "url": "https://pokeapi.co/api/v2/pokemon/1",
      "name": "bulbasaur",
      "id": 1,
      "stats": {
        "hp": 45,
        "attack": 49,
        "defence": 49,
        "specialAttack": 65,
        "specialDefence": 65,
        "speed": 45
      },
      "species": {
        "url": "https://pokeapi.co/api/v2/pokemon-species/1/",
        "colour": "green",
        "description": "A strange seed was\nplanted on its\nback at birth.\fThe plant sprouts\nand grows with\nthis POKéMON."
      }
    }
  }
}
