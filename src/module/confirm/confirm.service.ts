import {Injectable} from '@angular/core';
import {MdDialog} from "@angular/material";
import {ConfirmComponent} from "./confirm.component";

@Injectable()
export class ConfirmService {
  constructor(private dialog: MdDialog) {
  }

  alert(text: string) {
    this.dialog.open(ConfirmComponent)
  }
}
