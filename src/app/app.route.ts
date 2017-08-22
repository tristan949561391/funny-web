import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', loadChildren: './route/home/home.module#HomeModule'},
  {path: 'joke-text', loadChildren: './route/joke-text/joke-text.module#JokeTextModule'},
  {path: 'joke-gif', loadChildren: './route/joke-gif/joke-gif.module#JokeGifModule'},
  {path: 'game-lol', loadChildren: './route/game-lol/game-lol.module#GameLolModule'},
  {path: 'top-news', loadChildren: './route/top-news/top-news.module#TopNewsModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoute {
}
