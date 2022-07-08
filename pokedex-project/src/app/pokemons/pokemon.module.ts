import {NgModule} from "@angular/core";
import {PokeCardListComponent} from "./poke-card-list/poke-card-list.component";
import {FormsModule} from "@angular/forms";
import {PokeCardComponent} from "./poke-card/poke-card.component";
import {AppComponent} from "../app.component";
import {BrowserModule} from "@angular/platform-browser";
import {HttpClientModule} from "@angular/common/http";
import {CoreModule} from "../core/core.module";
import {NgbDropdownModule, NgbProgressbarModule} from "@ng-bootstrap/ng-bootstrap";
import {PokemonRoutingModule} from "./pokemon-routing.module";
import {PokemonProfileComponent} from "./pokemon/profile/pokemon-profile.component";
import {NgChartsModule} from "ng2-charts";
import {PokeChartComponent} from "./poke-chart/poke-chart.component";

@NgModule({
  declarations: [
    PokeCardListComponent,
    PokeCardComponent,
    PokemonProfileComponent,
    PokeChartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CoreModule,
    NgbDropdownModule,
    PokemonRoutingModule,
    NgChartsModule,
    NgbProgressbarModule
  ],
  exports: [
    PokeCardListComponent,
    PokemonProfileComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
})

export class PokemonModule { }
