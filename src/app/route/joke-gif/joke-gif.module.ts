import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {JokeGifComponent} from './joke-gif.component';
import {RouterModule} from "@angular/router";
import {MdCardModule, MdDialogModule} from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    MdCardModule,
    MdDialogModule,
    RouterModule.forChild([{
      path: '',
      component: JokeGifComponent
    }])
  ],
  declarations: [JokeGifComponent]
})
export class JokeGifModule {

}
