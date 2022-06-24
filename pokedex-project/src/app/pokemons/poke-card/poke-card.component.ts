import {Component, Input} from '@angular/core';
import IPokemonData from "../../core/interfaces/IPokemonData";

@Component({
  selector: 'app-poke-card',
  templateUrl: './poke-card.component.html',
  styleUrls: ['./poke-card.component.sass']
})
export class PokeCardComponent {

  @Input()
  pokeData: IPokemonData = {
    colour: '',
    name: '',
    url: '',
    image: '',
    id: '',
  };

  constructor() {
  }
}

