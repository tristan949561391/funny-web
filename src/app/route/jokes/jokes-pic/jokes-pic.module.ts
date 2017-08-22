import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {JokesPicComponent} from "./jokes-pic.component";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: "", component: JokesPicComponent}
    ])
  ],
  declarations: [JokesPicComponent]
})
export class JokesPicModule {
}
