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
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  // MatPaginator Output
  pageEvent: PageEvent;

  constructor(private shopService: ShopService, private router: Router) {

  }

  ngOnInit() {
    // for develop
     const p1: Product = {
      name: '1',
      description: 'texttexttext',
      quantity: 10,
      unitPrice: 9999,
      mass: 50,
      image: 'https://images.pexels.com/photos/776656/pexels-photo-776656.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'};
     const p2: Product = {
      name: '2',
      description: 'texttexttext',
      quantity: 10,
      unitPrice: 9999,
      mass: 50,
     image: 'https://images.pexels.com/photos/776656/pexels-photo-776656.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'};
     const p3: Product = {
      name: '3',
      description: 'texttexttext',
      quantity: 10,
      unitPrice: 9999,
      mass: 50,
     image: 'https://images.pexels.com/photos/776656/pexels-photo-776656.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'};
     const p4: Product = {
      name: '4',
      description: 'texttexttext',
      quantity: 10,
      unitPrice: 9999,
      mass: 50,
     image: 'https://images.pexels.com/photos/776656/pexels-photo-776656.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'};
     const p5: Product = {
      name: '5',
      description: 'texttexttext',
      quantity: 10,
      unitPrice: 9999,
      mass: 50,
     image: 'https://images.pexels.com/photos/776656/pexels-photo-776656.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'};
     const p6: Product = {
      name: '6',
      description: 'texttexttext',
      quantity: 10,
      unitPrice: 9999,
      mass: 50,
     image: 'https://images.pexels.com/photos/776656/pexels-photo-776656.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'};
     const p7: Product = {
      name: '7',
      description: 'texttexttext',
      quantity: 10,
      unitPrice: 9999,
      mass: 50,
     image: 'https://images.pexels.com/photos/776656/pexels-photo-776656.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'};
     const p8: Product = {
      name: '8',
      description: 'texttexttext',
      quantity: 10,
      unitPrice: 9999,
      mass: 50,
     image: 'https://images.pexels.com/photos/776656/pexels-photo-776656.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'};
     const p9: Product = {
      name: '9',
      description: 'texttexttext',
      quantity: 10,
      unitPrice: 9999,
      mass: 50,
     image: 'https://images.pexels.com/photos/776656/pexels-photo-776656.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'};
     const p10: Product = {
      name: '10',
      description: 'texttexttext',
      quantity: 10,
      unitPrice: 9999,
      mass: 50,
     image: 'https://images.pexels.com/photos/776656/pexels-photo-776656.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'};
     const p11: Product = {
      name: '11',
      description: 'texttexttext',
      quantity: 10,
      unitPrice: 9999,
      mass: 50,
     image: 'https://images.pexels.com/photos/776656/pexels-photo-776656.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'};
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
      this.splicedData = this.products.slice(((0 + 1) - 1) * this.pageSize).slice(0, this.pageSize);
    });*/
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

  viewProduct() {
    this.router.navigate(['/productdetail']);
  }
}
