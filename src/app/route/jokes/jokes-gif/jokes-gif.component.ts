import {Component, OnInit} from '@angular/core';
import {MdDialog} from "@angular/material";

@Component({
  selector: 'app-joke-gif',
  templateUrl: './jokes-gif.component.html',
  styleUrls: ['./jokes-gif.component.css']
})
export class JokesGifComponent implements OnInit {

  constructor(public dialog: MdDialog) {
  }

  ngOnInit() {
  }

  openDetail(dia) {
    this.dialog.open(dia, { hasBackdrop: false});
  }
}
