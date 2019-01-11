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
  product: Product;
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];


  constructor(private shopService: ShopService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
	  const id = params['productId'];
      if (id === 'new') {
        //this.mode = 'new';
        this.product = new Product();
      } else {
        this.shopService.getProduct(id).then((products) => {
          this.product = products[0];
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
