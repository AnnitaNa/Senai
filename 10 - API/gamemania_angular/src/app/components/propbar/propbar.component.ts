import { Component, OnInit } from '@angular/core';
import { Propaganda } from 'src/app/interfaces/propaganda';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-propbar',
  templateUrl: './propbar.component.html',
  styleUrls: ['./propbar.component.css']
})
export class PropbarComponent implements OnInit {


  constructor(private productsService: ProductsService) { }
  
  bar = [] as Propaganda[]

  ngOnInit(): void {
    this.carregarPropBar()
  }

  carregarPropBar() {
    this.productsService.getpropbar().subscribe(
      (cardsRecebidos: Propaganda[]) => {
        this.bar = cardsRecebidos;
        
      }
    )
  }

}
