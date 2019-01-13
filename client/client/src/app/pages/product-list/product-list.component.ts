import { ShopService } from './../../services/shop.service';
import { Product } from './../../models/product';
import { Component, OnInit } from '@angular/core';
import {PageEvent} from '@angular/material';
import {Router, ActivatedRoute} from '@angular/router';
import { LocalStorageService} from "../../services/local-storage.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];
  splicedData: Product[] = []; // data to show on one page

  // MatPaginator Inputs
  length: number;
  pageSize: number;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  // MatPaginator Output
  pageEvent: PageEvent;

  //cart
  cartCount: number = 0;

  constructor(private shopService: ShopService, private router: Router, private localStorageService: LocalStorageService) {
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

    this.localStorageService.getLocalStorage().then((products) => {
      this.cartCount = products.length;
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

  addProductToCart(p1: Product) {
    this.localStorageService.storeOneToStorage(p1);
    this.cartCount += 1;
  }

  viewProduct(_id: string) {
    this.router.navigate(['/productdetail'],{ queryParams: { productId: _id} });
  }
  onShoppingCartClicked() {
    this.router.navigate(['/shoppingcart']);
  }

}
