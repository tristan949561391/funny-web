import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AppRoute} from "./app.route";
import {Ng2BootstrapModule} from "ngx-bootstrap";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    Ng2BootstrapModule.forRoot(),
    AppRoute
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
