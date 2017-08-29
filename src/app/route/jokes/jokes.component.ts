import {Component, OnInit} from '@angular/core';
import {MdIconRegistry} from "@angular/material";
import {DomSanitizer} from "@angular/platform-browser";
import {Router} from "@angular/router";

@Component({
  selector: 'app-joke-text',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.css']
})
export class JokesComponent implements OnInit {

  types = [];
  select: string;

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.types.push({name: '全部', type: 'all'});
    this.types.push({name: '搞笑段子', type: 'text'});
    this.types.push({name: '搞笑图片', type: 'pic'});
    this.types.push({name: '动态图', type: 'gif'});
  }


}
