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
      this.columns = 8;
    } else {
      this.columns = 2;
    }
  }

  ngOnInit() {
     const p1: Product = {name: 'eins'};
     const p2: Product = {name: 'zwei'};
     const p3: Product = {name: 'drei'};
     this.products = [p1, p2,  p3];
  }

}
