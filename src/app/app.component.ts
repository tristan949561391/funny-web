import {Component} from '@angular/core';
import {MdIconRegistry} from "@angular/material";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private iconRepository: MdIconRegistry, sanitizer: DomSanitizer) {
    iconRepository.addSvgIcon(
      'scroll-top',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icon/scroll_top.svg'));
  }
}
