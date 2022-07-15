import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {PokeCardListComponent} from "./poke-card-list/poke-card-list.component";
import {PokemonProfileComponent} from "./pokemon/profile/pokemon-profile.component";
import {PokemonsResolver} from "./pokemons.resolver";
import {PokemonResolver} from "./pokemon/pokemon.resolver";
import {PokemonAddComponent} from "./pokemon/pokemon-add/pokemon-add.component";

const routes: Routes = [
  {
    path: '',
    component: PokeCardListComponent,
    resolve: {pokemons: PokemonsResolver}
  },
  {
    path: 'add',
    component: PokemonAddComponent
  },
  {
    path: ':id',
    component: PokemonProfileComponent,
    resolve: {pokemon: PokemonResolver}
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonRoutingModule {
}
