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
      img: "../../../assets/img/icon-shop.png",
      alt: "menu",
      menuLink: "",
      submenu: ["Home", "Compras", "gift card"],
  },
  {
    img: "../../../assets/img/icon-user.png",
    alt: "user",
    menuLink: "/login",
    submenu: ["Login", "Favorites", "Exit"],
  },
  {
    img: "../../../assets/img/icon-buy.png",
    alt: "buy",
    menuLink: "",
    submenu: ["Ver carrinho", "Métodos de pagamento"]
  }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
