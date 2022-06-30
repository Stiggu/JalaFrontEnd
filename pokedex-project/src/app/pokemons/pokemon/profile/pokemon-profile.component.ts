import {Component} from "@angular/core";
import {Location} from "@angular/common";

@Component({
  selector: 'pokemon-profile',
  templateUrl: './pokemon-profile.component.html'
})
export class PokemonProfileComponent {
  id: string = '1';
  fields: any;

  constructor(private location: Location) {
  }

  goBack(): void {
    this.location.back();
  }
}
