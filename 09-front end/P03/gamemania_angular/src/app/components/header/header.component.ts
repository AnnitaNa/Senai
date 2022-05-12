import { Component, OnInit } from '@angular/core';
import { Navigation } from 'src/app/interfaces/navigation';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  menus: Navigation[] = [
    {
      menu: "menu",
      submenu: ["Home", "Compras", "gift card"],
  },
  {
    menu: "User",
    submenu: ["Login", "Favorites", "Exit"],
  },
  {
    menu: "buy",
    submenu: ["Ver carrinho", "Métodos de pagamento"]
  }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
