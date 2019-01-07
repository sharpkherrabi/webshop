import { Component, OnInit } from '@angular/core';
import { ShopService } from '../../services/shop.service';
import { Product } from '../../models/product';
import {Router} from '@angular/router';
import {Order} from "../../models/order";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  products: Product[] = [];
  splicedDataProducts: Product[] = []; // data to show on one page
  // MatPaginator Inputs for Products
  productPageLength = 100;
  productPageSize = 10;
  productPageSizeOptions: number[] = [5, 10, 25, 100];

  orders: Order[] = [];
  splicedDataOrders: Order[] = [];
  // MatPaginator Inputs for Orders
  orderPageLength = 100;
  orderPageSize = 5;
  orderPageSizeOptions: number[] = [5, 10, 25, 100];



  constructor(private shopService: ShopService, private router: Router) { }

  ngOnInit() {
    // get all products from db
    this.shopService.getAllProducts().then((products) => {
      this.products = products;
      if(this.products != null) {
      this.productPageLength = this.products.length;
      this.splicedDataProducts = this.products.slice(((0 + 1) - 1) * this.productPageSize).slice(0, this.productPageSize);
      } else {
        console.log("Couldn't get products!");
      }
    });
  }

  // set how many items are shown on the page
  setPageSizeOptionsProduct(setPageSizeOptionsInput: string) {
    this.productPageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  }

  // set how many items are shown on the page
  setPageSizeOptionsOrder(setPageSizeOptionsInput: string) {
    this.orderPageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  }

  // change the splicedData data with the items for current page
  pageChangeEventProduct(event) {
    const offset = ((event.pageIndex + 1) - 1) * event.pageSize;
    this.splicedDataProducts = this.products.slice(offset).slice(0, event.pageSize);
  }

  pageChangeEventOrder(event) {
    const offset = ((event.pageIndex + 1) - 1) * event.pageSize;
    this.splicedDataOrders = this.orders.slice(offset).slice(0, event.pageSize);
  }

  editProduct() {
    this.router.navigate(['/editproduct']);
  }

}
