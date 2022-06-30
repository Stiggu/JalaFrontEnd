import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {PokeCardListComponent} from "./poke-card-list/poke-card-list.component";
import {PokemonProfileComponent} from "./pokemon/profile/pokemon-profile.component";

const routes: Routes = [
  {
    path: 'pokedex',
    component: PokeCardListComponent,
  },
  {
    path: 'pokedex/:id',
    component: PokemonProfileComponent,
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
