import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {JokesAllComponent} from "./jokes-all.component";
import {MdButtonModule, MdCardModule, MdIconModule, MdListModule} from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    MdCardModule,
    MdListModule,
    MdIconModule,
    MdButtonModule,
    RouterModule.forChild([{
      path: '',
      component: JokesAllComponent
    }])
  ],
  declarations: [JokesAllComponent]
})
export class JokesAllModule {
}
