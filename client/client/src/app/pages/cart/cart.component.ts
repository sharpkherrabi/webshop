import { Component, OnInit } from '@angular/core';
import {Product} from "../../models/product";
import {ShopService} from "../../services/shop.service";
import {Router} from "@angular/router";
import { LocalStorageService} from "../../services/local-storage.service";


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart: Product[];

  constructor(private shopService: ShopService, private router: Router, private localStorageService: LocalStorageService) { }

  ngOnInit() {

    this.localStorageService.getLocalStorage().then((products) => {
      this.cart = products;
    });
    /** for develop

    const cart: Product = {
      name: '2',
      description: 'test',
      quantity: 10,
      unitPrice: 123,
      mass: 50,
      image: 'https://images.pexels.com/photos/776656/pexels-photo-776656.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',

    };

    const p1: Product = {
      name: '1',
      description: 'texttexttext',
      quantity: 10,
      unitPrice: 9999,
      mass: 50,
      image: 'https://images.pexels.com/photos/776656/pexels-photo-776656.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',

    };
    const p4: Product = {
      name: '1',
      description: 'texttexttext',
      quantity: 10,
      unitPrice: 9999,
      mass: 50,
      image: 'https://images.pexels.com/photos/776656/pexels-photo-776656.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',

    };
    const p3: Product = {
      name: '1',
      description: 'asd',
      quantity: 10,
      unitPrice: 9999,
      mass: 50,
      image: 'https://images.pexels.com/photos/776656/pexels-photo-776656.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',

    };
    const p6: Product = {
      name: '1',
      description: 'texttexttext',
      quantity: 10,
      unitPrice: 9999,
      mass: 50,
      image: 'https://images.pexels.com/photos/776656/pexels-photo-776656.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',

    };
    const p5: Product = {
      name: '1',
      description: 'texttexttext',
      quantity: 10,
      unitPrice: 9999,
      mass: 50,
      image: 'https://images.pexels.com/photos/776656/pexels-photo-776656.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',

    };

    this.cart = [p1,cart,p3,p4,p5,p6];

    //this.localStorageService.storeOneToStorage(p1);
    //this.localStorageService.deleteLocalStorage();
    */
  }



}
