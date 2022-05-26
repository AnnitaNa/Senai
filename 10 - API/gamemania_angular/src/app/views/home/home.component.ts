import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

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
