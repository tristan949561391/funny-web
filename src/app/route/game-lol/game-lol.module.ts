import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GameLolComponent} from "./game-lol.component";
import {RouterModule} from "@angular/router";
import {MdCardModule} from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    MdCardModule,
    RouterModule.forChild([{
      path: '',
      component: GameLolComponent
    }])
  ],
  declarations: [GameLolComponent]
})
export class GameLolModule {
}
