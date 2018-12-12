import { Product } from './../../models/product';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  mode: 'large' | 'small' = 'large';
  columns: Number = 2;
  products: Product[] = [];

  constructor() {
    if (this.mode === 'large') {
      this.columns = 4;
    } else {
      this.columns = 1;
    }
  }

  ngOnInit() {
     const p1: Product = {name: '1'};
     const p2: Product = {name: '2'};
     const p3: Product = {name: '3'};
     const p4: Product = {name: '4'};
     const p5: Product = {name: '5'};
     const p6: Product = {name: '6'};
     const p7: Product = {name: '7'};
     const p8: Product = {name: '8'};
     this.products = [p1, p2,  p3, p4, p5, p6, p7, p8];
  }

}
