import { Component, OnInit } from '@angular/core';
import {Product} from "../../models/product";
import {ShopService} from "../../services/shop.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  products: Product[] = [];
  splicedDataProducts: Product[] = []; // data to show on one page
  splicedData: Product[] = [];




  // MatPaginator Inputs
  pageSize = 10;

  constructor(private shopService: ShopService, private router: Router) {



  }

  ngOnInit() {
    // for develop

    const cart: Product = {
      name: '2',
      description: 'test',
      quantity: 10,
      unitPrice: 123,
      mass: 50,
      image: 'https://images.pexels.com/photos/776656/pexels-photo-776656.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',

    };


    this.products = [cart];
    this.splicedData = this.products.slice(((0 + 1) - 1) * this.pageSize).slice(0, this.pageSize);
  }



}
