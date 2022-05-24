import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Cards } from 'src/app/interfaces/cards';
import { ProductsService } from 'src/app/services/products.service';


@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.css']
})

export class CarrouselComponent {

  constructor(private productsService: ProductsService) { }
  
  listaproducts = [] as Cards[]

  ngOnInit(): void {
    this.carregarCard()
  }

  carregarCard () {
    this.productsService.getposts().subscribe(
      (cardsRecebidos: Cards[]) => {
        this.listaproducts = cardsRecebidos;
        
      }
    )
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
