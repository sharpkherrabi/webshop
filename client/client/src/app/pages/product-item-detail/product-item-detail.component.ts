import { Component, OnInit } from '@angular/core';
import {Product} from "../../models/product";
import {ShopService} from "../../services/shop.service";
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit {
  products: Product[] = [];
  splicedData: Product[] = [];
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];


  constructor(private shopService: ShopService, private router: Router) { }

  ngOnInit() {
    // for develop
    const p1: Product = {name: '1',description:'Diese Ware ist toll'};

    this.products = [p1];
    this.splicedData = this.products.slice(((0 + 1) - 1) * this.pageSize).slice(0, this.pageSize);

  }
  onBackClicked() {
    this.router.navigate(['/products']);
  }
}
