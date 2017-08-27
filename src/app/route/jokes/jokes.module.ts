import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {JokesComponent} from "./jokes.component";
import {RouterModule} from "@angular/router";
import {MdButtonModule, MdCardModule, MdIconModule, MdToolbarModule} from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    MdCardModule,
    MdButtonModule,
    MdIconModule,
    MdToolbarModule,
    RouterModule.forChild([
      {
        path: '', component: JokesComponent, children: [
        {path: '', redirectTo: 'all', pathMatch: 'full'},
        {path: ':type', loadChildren: './jokes-all/jokes-all.module#JokesAllModule'},
        // {path: 'gif', loadChildren: './jokes-gif/jokes-gif.module#JokesGifModule'},
        // {path: 'pic', loadChildren: './jokes-pic/jokes-pic.module#JokesPicModule'},
        // {path: 'text', loadChildren: './jokes-text/jokes-text.module#JokesTextModule'},
        // {path: 'video', loadChildren: './jokes-video/jokes-video.module#JokesVideoModule'}
      ]
      }
    ])
  ],
  declarations: [JokesComponent]
})
export class JokesModule {

}

