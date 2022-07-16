import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "./app.routing.module";
import {PokemonModule} from "./pokemons/pokemon.module";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        PokemonModule,
        FontAwesomeModule,
    ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
