import {PreloadAllModules, RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {HomePageComponent} from "./core/components/home-page/home-page.component";

const routes: Routes = [
  {
    path: 'pokedex',
    loadChildren: () => import('./pokemons/pokemon.module').then(m => m.PokemonModule)
  },
  {
    path: '', component: HomePageComponent, pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
