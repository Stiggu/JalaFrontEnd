﻿import {NgModule} from "@angular/core";
import {PokeCardListComponent} from "./poke-card-list/poke-card-list.component";
import {FormsModule} from "@angular/forms";
import {PokeCardComponent} from "./poke-card/poke-card.component";
import {AppComponent} from "../app.component";
import {BrowserModule} from "@angular/platform-browser";
import {HttpClientModule} from "@angular/common/http";
import {CoreModule} from "../core/core.module";
import {NgbDropdownModule} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [
    PokeCardListComponent,
    PokeCardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CoreModule,
    NgbDropdownModule,
  ],
  exports: [
    PokeCardListComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})

export class PokemonModule { }
