import {Injectable} from "@angular/core";
import {PokemonService} from "./services/pokemon.service";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import IPokemonData from "../core/interfaces/IPokemonData";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PokemonsResolver implements Resolve<IPokemonData[]>{
  constructor(private pokemonService: PokemonService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IPokemonData[]> | Promise<IPokemonData[]> | IPokemonData[] {
    return this.pokemonService.getPokemonMockData();
  }

}
