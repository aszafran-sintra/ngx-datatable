import { Component, ViewEncapsulation } from '@angular/core';
import { Location, LocationStrategy, HashLocationStrategy } from '@angular/common';

@Component({
  selector: 'app',
  styleUrls: [
    '../src/themes/material.scss',
    '../src/themes/dark.scss',
    '../src/themes/bootstrap.scss'
  ],
  encapsulation: ViewEncapsulation.None,
  template: 
  `<column-force-demo></column-force-demo>`
})
export class AppComponent {

  constructor() {
  }
//  
}
