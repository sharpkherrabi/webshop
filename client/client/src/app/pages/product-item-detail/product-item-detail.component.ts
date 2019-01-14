import { Component, OnInit } from '@angular/core';
import {Product} from '../../models/product';
import {ShopService} from '../../services/shop.service';
import {Router, ActivatedRoute} from '@angular/router';
import { LocalStorageService} from "../../services/local-storage.service";

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

  //cart
  cartCount: number=0;

  constructor(
    private shopService: ShopService,
    private router: Router,
    private route: ActivatedRoute,
    private localStorageService: LocalStorageService) { }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
	  const id = params['productId'];
      if (id === 'new') {
        //this.mode = 'new';
        this.product = new Product();
      } else {
        this.shopService.getProduct(id).then((result) => {
          this.product = result.products[0];
        });
      }
    });

    this.localStorageService.getLocalStorage().then((products) => {
      this.cartCount = products.length;
    });
  }

  addProductToCart(p1: Product) {
    this.localStorageService.storeOneToStorage(p1);
    this.cartCount += 1;
  }

  onBackClicked() {
    this.router.navigate(['/products']);
  }


  onShoppingCartClicked() {
    this.router.navigate(['/shoppingcart']);
  }
}
