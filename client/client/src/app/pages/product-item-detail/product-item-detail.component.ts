import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ShopService } from '../../services/shop.service';
import { Router, ActivatedRoute } from '@angular/router';
import { LocalStorageService } from "../../services/local-storage.service";
import { MatSnackBar } from '@angular/material';
import * as _ from 'lodash';
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
	cartCount: number = 0;

	constructor(
		private shopService: ShopService,
		private router: Router,
		private route: ActivatedRoute,
		private localStorageService: LocalStorageService,
		private snackBar: MatSnackBar) { }

	ngOnInit() {
		this.route.queryParams.subscribe(async (params) => {
			const id = params['productId'];
			if (id === 'new') {
				//this.mode = 'new';
				this.product = new Product();
			} else {
				let localStorageProducts = await this.localStorageService.getLocalStorage();
				if (!_.some(localStorageProducts, { _id: id })) {
					this.shopService.getProduct(id).then((result) => {
						this.product = result.products[0];
					});
				} else {
					this.product = _.find(localStorageProducts, ['_id', id]);
				}
			}
		});
		if (this.localStorageService.isLocalStorageSet())
			this.localStorageService.getLocalStorage().then((products) => {
				this.cartCount = products.length;
			});
	}

	addProductToCart(p1: Product) {
		if (_.isUndefined(p1.boughtQuantity)) p1.boughtQuantity = 0;
		++p1.boughtQuantity;
		this.localStorageService.storeOneToStorage(p1);
		this.cartCount += 1;
		this.snackBar.open('Added to Cart', 'Ok', {
			duration: 1000
		});
	}

	onBackClicked() {
		this.router.navigate(['/products']);
	}


	onShoppingCartClicked() {
		this.router.navigate(['/shoppingcart']);
	}
}
