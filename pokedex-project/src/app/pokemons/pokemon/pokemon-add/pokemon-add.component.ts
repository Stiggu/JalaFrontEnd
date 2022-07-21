import {Component} from "@angular/core";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'pokemon-add',
  templateUrl: './pokemon-add.component.html',
  styleUrls: ['./pokemon-add.component.sass']
})
export class PokemonAddComponent {

  profileForm = new FormGroup({
    pokemonName: new FormControl(''),
    pokemonId: new FormControl(''),
    pokemonColour: new FormControl(''),
  })

  constructor(private fb: FormBuilder) {
  }

  onSubmit(){
    alert('Pokemon has been saved!');
    console.log(this.profileForm.value);
  }

}
