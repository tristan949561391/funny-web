import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {JokeTextComponent} from "./joke-text.component";
import {RouterModule} from "@angular/router";
import {MdCardModule} from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    MdCardModule,
    RouterModule.forChild([
      {path: '', component: JokeTextComponent}
    ])
  ],
  declarations: [JokeTextComponent]
})
export class JokeTextModule {

}

