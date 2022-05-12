import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { BlogPostCard } from '../../interfaces/blog-post-card';


@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.css']
})

export class CarrouselComponent {


  constructor() { }
  posts: BlogPostCard[] = [
    
    {
      description: "Notebook AXUS UTR-73 de 14'' 8G SSD 256G Wifi",
      image: "./assets/img/notebook-home.png",
      prevPrice: "R$5.000",
      price: "R$ 3.999,90",
      method: "à vista",
    },
    {
      description: "Cadeira Gamer ETR-Y acolchoada preta reclinável",
      image: "./assets/img/cadeira-gamer.png",
      prevPrice: "R$5.000",
      price: "R$ 3.999,90",
      method: "à vista",
    },
    {
      description: "Mouse gamer azul ortopédico com botões aborrachados",
      image: "./assets/img/mouse-gamer.png",
      prevPrice: "R$5.000",
      price: "R$ 3.999,90",
      method: "à vista",
    },
    {
      description: "Teclado gamer colorido mecânico baixo ruído",
      image: "./assets/img/teclado-gamer.png",
      prevPrice: "R$5.000",
      price: "R$ 3.999,90",
      method: "à vista",
    },

    {
      description: "Notebook AXUS UTR-73 de 14'' 8G SSD 256G Wifi",
      image: "./assets/img/notebook-home.png",
      prevPrice: "R$5.000",
      price: "R$ 3.999,90",
      method: "à vista",
    },
    {
      description: "Cadeira Gamer ETR-Y acolchoada preta reclinável",
      image: "./assets/img/cadeira-gamer.png",
      prevPrice: "R$5.000",
      price: "R$ 3.999,90",
      method: "à vista",
    },
    {
      description: "Mouse gamer azul ortopédico com botões aborrachados",
      image: "./assets/img/mouse-gamer.png",
      prevPrice: "R$5.000",
      price: "R$ 3.999,90",
      method: "à vista",
    },
    {
      description: "Teclado gamer colorido mecânico baixo ruído",
      image: "./assets/img/teclado-gamer.png",
      prevPrice: "R$5.000",
      price: "R$ 3.999,90",
      method: "à vista",
    },

  ];


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
