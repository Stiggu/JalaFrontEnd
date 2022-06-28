import {NgModule} from "@angular/core";
import {SearchBarComponent} from "./components/search-bar/search-bar.component";
import {FormsModule} from "@angular/forms";
import {EmptySearchComponent} from "./components/empty-search/empty-search.component";

@NgModule({
  declarations: [
    SearchBarComponent,
    EmptySearchComponent
  ],
  imports: [
    FormsModule

  ],
  exports: [
    SearchBarComponent,
    EmptySearchComponent
  ]
})

export class CoreModule {}
