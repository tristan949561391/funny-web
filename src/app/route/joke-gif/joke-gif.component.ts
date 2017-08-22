import {Component, OnInit} from '@angular/core';
import {MdDialog} from "@angular/material";

@Component({
  selector: 'app-joke-gif',
  templateUrl: './joke-gif.component.html',
  styleUrls: ['./joke-gif.component.css']
})
export class JokeGifComponent implements OnInit {

  constructor(public dialog: MdDialog) {
  }

  ngOnInit() {
  }

  openDetail(dia) {
    this.dialog.open(dia, { hasBackdrop: false});
  }
}
