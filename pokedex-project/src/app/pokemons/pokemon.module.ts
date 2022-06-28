import {NgModule} from "@angular/core";
import {PokeCardListComponent} from "./poke-card-list/poke-card-list.component";
import {FormsModule} from "@angular/forms";
import {PokeCardComponent} from "./poke-card/poke-card.component";
import {AppComponent} from "../app.component";
import {BrowserModule} from "@angular/platform-browser";
import {EmptySearchComponent} from "./empty-search/empty-search.component";
import {HttpClientModule} from "@angular/common/http";
import {AppModule} from "../app.module";
import {SearchBarComponent} from "../core/components/search-bar/search-bar.component";
import {CoreModule} from "../core/core.module";

@NgModule({
  declarations: [
    PokeCardListComponent,
    PokeCardComponent,
    EmptySearchComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CoreModule,
  ],
  exports: [
    PokeCardListComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})

export class PokemonModule { }
