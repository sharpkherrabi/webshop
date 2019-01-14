import { Component, OnInit } from '@angular/core';
import {Product} from "../../models/product";
import {ShopService} from "../../services/shop.service";
import {Router} from "@angular/router";
import {LocalStorageService} from "../../services/local-storage.service";
import {Order} from "../../models/order";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  cart: Product[];
  cartCount: number = 0;
  products: Product[] = [];
  private order: Order;

  constructor(private shopService: ShopService, private router: Router, private localStorageService: LocalStorageService) {
  }

  ngOnInit() {
    this.order = new Order;

    this.localStorageService.getLocalStorage().then((products) => {
      this.cart = products;
      this.cartCount = products.length;
    });
  }

  async onOrderClicked() {
    try {
      await this.shopService.createOrder(this.order);
      console.log(this.order.firstname);

        this.router.navigate(['/dashboard']);


    } catch (error) {
      console.log(error);
    }
  }

}
