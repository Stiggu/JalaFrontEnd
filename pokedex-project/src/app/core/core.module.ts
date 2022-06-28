import {NgModule} from "@angular/core";
import {SearchBarComponent} from "./components/search-bar/search-bar.component";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    SearchBarComponent,
  ],
  imports: [
    FormsModule

  ],
  exports: [
    SearchBarComponent,
  ]
})

export class CoreModule {}
