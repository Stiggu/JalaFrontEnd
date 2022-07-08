import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {PokeCardListComponent} from "./poke-card-list/poke-card-list.component";
import {PokemonProfileComponent} from "./pokemon/profile/pokemon-profile.component";
import {PokemonsResolver} from "./pokemons.resolver";
import {PokemonResolver} from "./pokemon/pokemon.resolver";

const routes: Routes = [
  {
    path: 'pokedex',
    component: PokeCardListComponent,
    resolve: {pokemons: PokemonsResolver}
  },
  {
    path: 'pokedex/:id',
    component: PokemonProfileComponent,
    resolve: {pokemon: PokemonResolver}
  },
  {
    path: '',
    redirectTo: '/pokedex',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PokemonRoutingModule {
}
