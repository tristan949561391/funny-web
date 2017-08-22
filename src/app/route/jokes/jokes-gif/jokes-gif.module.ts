import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {JokesGifComponent} from './jokes-gif.component';
import {RouterModule} from "@angular/router";
import {MdCardModule, MdDialogModule} from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    MdCardModule,
    MdDialogModule,
    RouterModule.forChild([{
      path: '',
      component: JokesGifComponent
    }])
  ],
  declarations: [JokesGifComponent]
})
export class JokesGifModule {}
