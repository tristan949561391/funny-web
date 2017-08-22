import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TopNewsComponent} from "./top-news.component";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: TopNewsComponent
    }])
  ],
  declarations: [TopNewsComponent]
})
export class TopNewsModule {
}
