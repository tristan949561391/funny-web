import {Component, OnInit} from '@angular/core';
import {MdIconRegistry} from "@angular/material";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-joke-text',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.css']
})
export class JokesComponent implements OnInit {

  constructor(iconRepository: MdIconRegistry, sanitizer: DomSanitizer) {
    iconRepository.addSvgIcon(
      'like',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icon/like.svg'))
      .addSvgIcon('more', sanitizer.bypassSecurityTrustResourceUrl('assets/icon/more.svg'));
  }

  ngOnInit() {
  }

}
