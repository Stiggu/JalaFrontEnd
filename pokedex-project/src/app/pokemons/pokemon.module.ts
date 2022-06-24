﻿import {NgModule} from "@angular/core";
import {PokeCardListComponent} from "./poke-card-list/poke-card-list.component";
import {FormsModule} from "@angular/forms";
import {PokeCardComponent} from "./poke-card/poke-card.component";
import {AppComponent} from "../app.component";
import {BrowserModule} from "@angular/platform-browser";

@NgModule({
  declarations: [
    PokeCardListComponent,
    PokeCardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  exports: [
    PokeCardListComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})

export class PokemonModule { }
