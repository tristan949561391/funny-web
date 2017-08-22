import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ConfirmComponent} from './confirm.component';
import {MdDialogModule} from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    MdDialogModule,
  ],
  declarations: [ConfirmComponent],
  entryComponents: [ConfirmComponent],
  exports: []
})
export class ConfirmModule {

}
