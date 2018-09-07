import { Component, OnInit } from '@angular/core'
import {DomSanitizer} from '@angular/platform-browser'
import {MatIconRegistry} from '@angular/material'

@Component({
  selector: 'app-empty',
  templateUrl: './empty.component.html',
  styleUrls: ['./empty.component.scss']
})
export class EmptyComponent implements OnInit {

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'sentiment_very_dissatisfied',
      sanitizer.bypassSecurityTrustResourceUrl('assets/sentiment_very_dissatisfied.svg'))
  }

  ngOnInit() {
  }

}
