import { ShopService } from './../../services/shop.service';
import { Product } from './../../models/product';
import { Component, OnInit } from '@angular/core';
import {PageEvent} from '@angular/material';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];
  splicedData: Product[] = [];

  // MatPaginator Inputs
  length = 100;
  pageSize = 5;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  // MatPaginator Output
  pageEvent: PageEvent;

  constructor(private shopService: ShopService) {

  }

  ngOnInit() {
    // for develop
     const p1: Product = {name: '1'};
     const p2: Product = {name: '2'};
     const p3: Product = {name: '3'};
     const p4: Product = {name: '4'};
     const p5: Product = {name: '5'};
     const p6: Product = {name: '6'};
     const p7: Product = {name: '7'};
     const p8: Product = {name: '8'};
     const p9: Product = {name: '9'};
     const p10: Product = {name: '10'};
     const p11: Product = {name: '11'};
     this.products = [p1, p2,  p3, p4, p5, p6, p7, p8, p9, p10, p11];
     /*for (let i = 0 ; i < 10 ; i++ ) {
      this.splicedData.push(this.products[i]);
     }*/
     this.length = this.products.length;
     this.splicedData = this.products.slice(((0 + 1) - 1) * this.pageSize).slice(0, this.pageSize);
    // end for develop

    // get all products from db
    /**this.shopService.getProducts().then((products) => {
      this.products = products;
      this.length = this.products.length;
      this.splicedData = products.slice(((0 + 1) - 1) * this.pageSize).slice(0, this.pageSize);
    });*/
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  }

  pageChangeEvent(event) {
    const offset = ((event.pageIndex + 1) - 1) * event.pageSize;
    this.splicedData = this.products.slice(offset).slice(0, event.pageSize);
  }
}
