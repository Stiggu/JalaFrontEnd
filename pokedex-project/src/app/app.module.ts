import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {PokemonModule} from "./pokemons/pokemon.module";
import {SearchBarComponent} from "./core/components/search-bar/search-bar.component";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    PokemonModule,
    BrowserModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
