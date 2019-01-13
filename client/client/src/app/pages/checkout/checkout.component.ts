import { Component, OnInit } from '@angular/core';
import {Product} from "../../models/product";
import {ShopService} from "../../services/shop.service";
import {Router} from "@angular/router";
import {LocalStorageService} from "../../services/local-storage.service";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  cart: Product[];
  cartCount: number = 0;
  products: Product[] = [];
  splicedDataProducts: Product[] = []; // data to show on one page
  splicedData: Product[] = [];


  // MatPaginator Inputs
  pageSize = 10;

  constructor(private shopService: ShopService, private router: Router, private localStorageService: LocalStorageService) {


  }

  ngOnInit() {

    this.localStorageService.getLocalStorage().then((products) => {
      this.cart = products;
      this.cartCount = products.length;
    });
  }

}
