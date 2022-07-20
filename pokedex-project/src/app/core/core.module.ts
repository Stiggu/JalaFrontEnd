import {NgModule} from "@angular/core";
import {SearchBarComponent} from "./components/search-bar/search-bar.component";
import {FormsModule} from "@angular/forms";
import {EmptySearchComponent} from "./components/empty-search/empty-search.component";
import {CommonModule} from "@angular/common";
import {HomePageComponent} from "./components/home-page/home-page.component";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    SearchBarComponent,
    EmptySearchComponent,
    HomePageComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule,
  ],
  exports: [
    SearchBarComponent,
    EmptySearchComponent
  ]
})

export class CoreModule {}
