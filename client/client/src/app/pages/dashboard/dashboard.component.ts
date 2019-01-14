import { Component, OnInit } from '@angular/core';
import { ShopService } from '../../services/shop.service';
import { Product } from '../../models/product';
import { Router } from '@angular/router';
import { Order } from "../../models/order";
import * as _ from 'lodash';
@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

	products: Product[] = [];
	// backup products
	productBackup: Product[] = [];
	splicedDataProducts: Product[] = []; // data to show on one page
	// MatPaginator Inputs for Products
	productPageLength = 100;
	productPageSize = 10;
	productPageSizeOptions: number[] = [5, 10, 25, 100];

	orders: Order[] = [];
	splicedDataOrders: Order[] = [];
	// MatPaginator Inputs for Orders
	orderPageLength = 100;
	orderPageSize = 5;
	orderPageSizeOptions: number[] = [5, 10, 25, 100];

	constructor(private shopService: ShopService, private router: Router) {
	}

	ngOnInit() {
		// get all products from db
		this.shopService.getAllProducts().then((result) => {
			this.products = result.products;
			if (this.products != null) {
				this.productPageLength = this.products.length;
				this.splicedDataProducts = this.products.slice(((0 + 1) - 1) * this.productPageSize).slice(0, this.productPageSize);
				this.productBackup = this.splicedDataProducts;
			} else {
				console.log("Couldn't get products!");
			}
		});
		this.shopService.getAllOrders().then((result) => {
			this.orders = result.orders;
			if (this.orders != null) {
				this.orderPageLength = this.orders.length;
				this.splicedDataOrders = this.orders.slice(((0 + 1) - 1) * this.orderPageSize).slice(0, this.orderPageSize);
			} else {
				console.log("Couldn't get orders!");
			}
		});
	}

	// set how many items are shown on the page
	setPageSizeOptionsProduct(setPageSizeOptionsInput: string) {
		this.productPageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
	}

	// set how many items are shown on the page
	setPageSizeOptionsOrder(setPageSizeOptionsInput: string) {
		this.orderPageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
	}

	// change the splicedData data with the items for current page
	pageChangeEventProduct(event) {
		const offset = ((event.pageIndex + 1) - 1) * event.pageSize;
		this.splicedDataProducts = this.products.slice(offset).slice(0, event.pageSize);
		this.productBackup = this.splicedDataProducts;
	}

	pageChangeEventOrder(event) {
		const offset = ((event.pageIndex + 1) - 1) * event.pageSize;
		this.splicedDataOrders = this.orders.slice(offset).slice(0, event.pageSize);
	}

	async onDeleteClicked(id) {
		try {
			console.log('to delete id: ' + id);
			await this.shopService.deleteProduct(id);
			for (let i = 0; i < this.products.length; i++) {
				if (this.products[i]._id === id) {
					this.products.splice(i, 1);
					break;
				}
				this.ngOnInit();
			}
		} catch (error) {
			console.log('Delete error in DetailComponenet' + error);
		}
	}

	onResult(products: Product[]) {
		this.splicedDataProducts = _.intersectionWith(this.productBackup, products, _.isEqual);
		this.productPageLength = this.splicedDataProducts.length;
	}
}
