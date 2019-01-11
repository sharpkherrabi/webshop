import { Component, OnInit } from '@angular/core';
import {Product} from '../../models/product';
import {ShopService} from '../../services/shop.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit {
  products: Product;
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];


  constructor(private shopService: ShopService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
	  const entryId = params['productId'];
      if (entryId === 'new') {
        //this.mode = 'new';
        this.products = new Product();
      } else {
        this.shopService.getProduct(entryId).then((product) => {
          this.products = product;
        });
      }
    });
  }

  onBackClicked() {
    this.router.navigate(['/products']);
  }


  onShoppingCartClicked() {
    this.router.navigate(['/shoppingcart']);
  }
}
