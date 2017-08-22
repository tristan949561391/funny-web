import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {JokesTextComponent} from "./jokes-text.component";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: "", component: JokesTextComponent}
    ])
  ],
  declarations: [JokesTextComponent]
})
export class JokesTextModule {
}
