import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {JokesAllComponent} from "./jokes-all.component";
import {MdButtonModule, MdCardModule, MdIconModule, MdListModule} from "@angular/material";
import {HttpModule} from "@angular/http";


@NgModule({
  imports: [
    CommonModule,
    MdCardModule,
    MdListModule,
    MdIconModule,
    MdButtonModule,
    HttpModule,
    RouterModule.forChild([{
      path: '',
      component: JokesAllComponent
    }])
  ],
  declarations: [JokesAllComponent]
})
export class JokesAllModule {
}
