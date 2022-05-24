

import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'gamemania';

  

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,

    navSpeed: 600,
    navText: ['&#8249', '&#8250;'],

    responsive: {
      0: {
        items: 1 
      },
      550: {
        items: 2
      },
      800: {
        items: 3
      },
      1050: {
        items: 4
      }
    },
    nav: true
  }
}



