import { ShopService } from './../../services/shop.service';
import { Product } from './../../models/product';
import { Component, OnInit } from '@angular/core';
import {PageEvent} from '@angular/material';
import {Router, ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];
  splicedData: Product[] = []; // data to show on one page

  // MatPaginator Inputs
  length: Number;
  pageSize: Number;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  // MatPaginator Output
  pageEvent: PageEvent;

  constructor(private shopService: ShopService, private router: Router) {
    this.length = 0;
    this.pageSize = 10;
  }

  ngOnInit() {
    // get all products from db
    this.shopService.getAllProducts().then((products) => {
      this.products = products;
      if(this.products != null) {
        this.length = this.products.length;
        this.splicedData = this.products.slice(((0 + 1) - 1) * this.pageSize).slice(0, this.pageSize);
      } else {
        console.log("Couldn't get products!");
      }
    });
  }

  // set how many items are shown on the page
  setPageSizeOptions(setPageSizeOptionsInput: string) {
    this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  }

  // change the splicedData data with the items for current page
  pageChangeEvent(event) {
    const offset = ((event.pageIndex + 1) - 1) * event.pageSize;
    this.splicedData = this.products.slice(offset).slice(0, event.pageSize);
  }

  /**
  viewProduct() {
    this.router.navigate(['/productdetail']);
  }
  onShoppingCartClicked() {
    this.router.navigate(['/shoppingcart']);
  }
   */
}
