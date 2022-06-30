import {Component, Input} from '@angular/core';
import IPokemonData from "../../core/interfaces/IPokemonData";
import {Router} from "@angular/router";

@Component({
  selector: 'app-poke-card',
  templateUrl: './poke-card.component.html',
  styleUrls: ['./poke-card.component.sass']
})
export class PokeCardComponent {

  constructor(private router: Router) {
  }

  @Input()
  pokeData: IPokemonData = {
    colour: '',
    name: '',
    url: '',
    image: '',
    id: '',
  };

  goToProfile(){
    this.router.navigate([`/pokedex/${this.pokeData.id}`]);
    console.log('a');
  }
}

