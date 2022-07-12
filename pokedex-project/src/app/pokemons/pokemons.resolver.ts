import {Injectable} from "@angular/core";
import {PokemonService} from "./services/pokemon.service";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import PokemonListData from "../core/interfaces/PokemonListData";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PokemonsResolver implements Resolve<PokemonListData[]>{
  constructor(private pokemonService: PokemonService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<PokemonListData[]> | Promise<PokemonListData[]> | PokemonListData[] {
    return this.pokemonService.getPokemonList();
  }

}
