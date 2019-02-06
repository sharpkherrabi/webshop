import { ShopService } from './../../services/shop.service';
import { Product } from './../../models/product';
import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { LocalStorageService } from "../../services/local-storage.service";
import * as _ from 'lodash';
import { MaterialModule } from '../../material';
import {MatSnackBar} from '@angular/material';
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

	// backup products
	productBackup: Product[] = [];
	constructor(private shopService: ShopService, private router: Router, private localStorageService: LocalStorageService, private snackBar: MatSnackBar) {
		this.length = 0;
		this.pageSize = 10;
	}

	ngOnInit() {
		// get all products from db
		this.shopService.getAllProducts().then(async (result) => {
			let localStorageProducts = await this.localStorageService.getLocalStorage();
			this.products = _.unionWith(localStorageProducts, result.products, (a: Product, b: Product) => a._id === b._id);
			if (this.products != null) {
				this.length = this.products.length;
				this.splicedData = this.products.slice(((0 + 1) - 1) * this.pageSize).slice(0, this.pageSize);
				this.productBackup = this.splicedData;
			} else {
				console.log("Couldn't get products!");
			}
		});
		if (this.localStorageService.isLocalStorageSet())
			this.localStorageService.getLocalStorage().then((products) => {
				this.cartCount = _.sumBy(products, (product) => product['boughtQuantity']);
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
		this.productBackup = this.splicedData;
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

	viewProduct(_id: string) {
		this.router.navigate(['/productdetail'], { queryParams: { productId: _id } });
	}
	onShoppingCartClicked() {
		this.router.navigate(['/shoppingcart']);
	}

	onResult(products: Product[]) {
		this.splicedData = _.intersectionWith(this.productBackup, products, _.isEqual);
		this.length = this.splicedData.length;
	}

}
