import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {PokeCardListComponent} from "./poke-card-list/poke-card-list.component";

const routes: Routes = [
  {
    path: 'pokedex',
    component: PokeCardListComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PokemonRoutingModule {
}
