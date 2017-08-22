import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {JokesAllComponent} from "./jokes-all.component";
import {MdCardModule, MdListModule} from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    MdCardModule,
    MdListModule,
    RouterModule.forChild([{
      path: '',
      component: JokesAllComponent
    }])
  ],
  declarations: [JokesAllComponent]
})
export class JokesAllModule {
}
