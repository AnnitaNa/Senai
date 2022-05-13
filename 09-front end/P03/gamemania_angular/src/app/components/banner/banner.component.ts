import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  bannerimg = 
  [
    "./assets/img/test-2.png", 
    "./assets/img/test-3.png"
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
