import {NgModule} from "@angular/core";
import {SearchBarComponent} from "./components/search-bar/search-bar.component";
import {FormsModule} from "@angular/forms";
import {EmptySearchComponent} from "./components/empty-search/empty-search.component";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    SearchBarComponent,
    EmptySearchComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
  ],
  exports: [
    SearchBarComponent,
    EmptySearchComponent
  ]
})

export class CoreModule {}
