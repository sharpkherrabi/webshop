import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Order } from '../models/order';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class ShopService {
	//productBaseUrl = 'http://192.168.99.100:3000/product';
	//orderBaseUrl = 'http://192.168.99.100:3000/order';
	productBaseUrl = 'http://localhost:3000/product';
	orderBaseUrl = 'http://localhost:3000/order';
	paymentBaseUrl = 'http://localhost:3000/checkout/paypal';

	constructor(private httpClient: HttpClient) { }

	getAllProducts() {
		const result = this.httpClient.get<any>(`${this.productBaseUrl}/get`).toPromise();
		return result;
	}

	getProduct(id: string) {
		const result = this.httpClient.get<any>(`${this.productBaseUrl}/get/${id}`).toPromise();
		return result;
	}

	updateProduct(id: string, product: Product) {
		const result = this.httpClient.put<any>(`${this.productBaseUrl}/update/${id}`, product).toPromise();
		return result;
	}

	deleteProduct(id: string) {
		const result = this.httpClient.delete<any>(`${this.productBaseUrl}/delete/${id}`).toPromise();
		return result;
	}

	createProduct(product: Product) {
		const result = this.httpClient.post<any>(`${this.productBaseUrl}/create`, product).toPromise();
		return result;
	}

	getAllOrders() {
		const result = this.httpClient.get<any>(`${this.orderBaseUrl}/get`).toPromise();
		return result;
	}

	getOrder(id: string) {
		const result = this.httpClient.get<any>(`${this.orderBaseUrl}/get/${id}`).toPromise();
		return result;
	}

	updateOrder(id: string, order: Order) {
		const result = this.httpClient.put<any>(`${this.orderBaseUrl}/update/${id}`, order).toPromise();
		return result;
	}

	deleteOrder(id: string) {
		const result = this.httpClient.delete<any>(`${this.orderBaseUrl}/delete/${id}`).toPromise();
		return result;
	}

	createOrder(order: Order) {
		const result = this.httpClient.post<any>(`${this.orderBaseUrl}/create`, order).toPromise();
		return result;
	}

	sendPaypalPaymentRequest(id: String) {
		const result = this.httpClient.post<any>(`${this.paymentBaseUrl}`, { orderId: id }).toPromise();
	}
	// search in name and description
	searchInNameAndDescription(query: String) {
		const result = this.httpClient.get<any>(`${this.productBaseUrl}/search/?q=${query}`).toPromise();
		return result;
	}
}
