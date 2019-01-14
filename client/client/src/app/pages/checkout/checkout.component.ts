import { Component, OnInit } from '@angular/core';
import { Product } from "../../models/product";
import { ShopService } from "../../services/shop.service";
import { Router } from "@angular/router";
import { LocalStorageService } from "../../services/local-storage.service";
import { Order, Orderer, Address, ProductInfo } from '../../models/order';


@Component({
	selector: 'app-checkout',
	templateUrl: './checkout.component.html',
	styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

	cart: Product[];
	cartCount: number = 0;
	products: Product[] = [];
	//   prods: Product[];

	splicedDataProducts: Product[] = []; // data to show on one page
	splicedData: Product[] = [];


	private order: Order;
	private productInfo: ProductInfo;
	//productInfo: ProductInfo[] = [];
	prods: ProductInfo[];

	// MatPaginator Inputs
	pageSize = 10;


	constructor(private shopService: ShopService, private router: Router, private localStorageService: LocalStorageService) {
	}

	ngOnInit() {
		this.order = new Order;
		this.order.orderer = new Orderer;
		this.order.address = new Address;
		this.prods = [];
		this.order.product = [];


		this.localStorageService.getLocalStorage().then((products) => {
			this.cart = products;
			this.cartCount = products.length;
		});
	}


	//Here fill order with products info, post order and send to paypal route
	async onPayClicked() {
		for (let i = 0; i < this.cart.length; i++) {
			this.productInfo = new ProductInfo;
			this.productInfo.id = this.cart[i]._id;

			this.productInfo.quantity = 1;
			this.order.product.push(this.productInfo);
		}

		try {
			const result = await this.shopService.createOrder(this.order);
			const orderId = result.order._id;
			
			this.localStorageService.deleteLocalStorage();
			// redirect to paypal
			const paymentObj = await this.shopService.sendPaypalPaymentRequest(orderId);
			window.location.href = paymentObj.redirectURL;


		} catch (error) {
		}




	}



}
