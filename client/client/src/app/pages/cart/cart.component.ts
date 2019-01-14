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
  cartCount: number = 0;
  sum: number = 0;

  constructor(private shopService: ShopService, private router: Router, private localStorageService: LocalStorageService) { }

  ngOnInit() {
    this.localStorageService.getLocalStorage().then((products) => {
      this.cart = products;
      this.cartCount = products.length;

      for(let i=0;i<this.cartCount;i++) {
        this.sum = this.sum + this.cart[i].unitPrice;
      }
    });
  }

  removeProduct(product: Product){
      for(let i=0;i<this.cart.length;i++) {
          if(this.cart[i]._id === product._id){
              this.sum = this.sum - this.cart[i].unitPrice;
              this.cart.splice(i,1);
              break;
          }
      }
      this.localStorageService.storeProductsToStorage(this.cart);
      this.cartCount -= 1;
  }

  removeAllProducts() {
    this.localStorageService.deleteLocalStorage();
    this.cartCount = 0;
  }
}
