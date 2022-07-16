import {NgModule} from "@angular/core";
import {PokeCardListComponent} from "./poke-card-list/poke-card-list.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {PokeCardComponent} from "./poke-card/poke-card.component";
import {AppComponent} from "../app.component";
import {CoreModule} from "../core/core.module";
import {NgbDropdownModule} from "@ng-bootstrap/ng-bootstrap";
import {PokemonRoutingModule} from "./pokemon-routing.module";
import {PokemonProfileComponent} from "./pokemon/profile/pokemon-profile.component";
import {CommonModule} from "@angular/common";
import {PokeChartComponent} from "./pokemon/poke-chart/poke-chart.component";
import {PokeEvolutionComponent} from "./pokemon/poke-evolutions/poke-evolution.component";
import {PokemonAddComponent} from "./pokemon/pokemon-add/pokemon-add.component";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";

@NgModule({
  declarations: [
    PokeCardListComponent,
    PokeCardComponent,
    PokemonProfileComponent,
    PokeChartComponent,
    PokeEvolutionComponent,
    PokemonAddComponent,
  ],
    imports: [
        CommonModule,
        CoreModule,
        FormsModule,
        ReactiveFormsModule,
        PokemonRoutingModule,
        NgbDropdownModule,
        FontAwesomeModule,
    ],
  exports: [
    PokemonAddComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
})

export class PokemonModule {
}
