import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {PokemonService} from "../services/pokemon.service";
import {Observable} from "rxjs";
import PokemonProfile from "../../core/interfaces/pokemonProfile";

@Injectable({
  providedIn: 'root'
})
export class PokemonResolver implements Resolve<PokemonProfile> {
  constructor(private pokemonService: PokemonService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<PokemonProfile> | Promise<PokemonProfile> | PokemonProfile {
    const id = route.paramMap.get('id') || "1";
    return this.pokemonService.getPokemon(parseInt(id));
    /*return {
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
      "url": "https://pokeapi.co/api/v2/pokemon/1",
      "name": "bulbasaur",
      "id": 1,
      "weight": 69,
      "height": 7,
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
        "description": "A strange seed was\nplanted on its\nback at birth.\fThe plant sprouts\nand grows with\nthis POKéMON.",
        "habitat": "grasslands",
        "generation": "generation-i",
      },
      "types": [
        {
          "name": "grass",
          "url": "https://pokeapi.co/api/v2/type/12/"
        },
        {
          "name": "poison",
          "url": "https://pokeapi.co/api/v2/type/4/"
        }
      ],
    }*/
  }
}
