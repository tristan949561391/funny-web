import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {JokesVideoComponent} from "./jokes-video.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '', component: JokesVideoComponent
    }])
  ],
  declarations: [JokesVideoComponent]
})
export class JokesVideoModule {
}
