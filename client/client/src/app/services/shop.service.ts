import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Order } from '../models/order';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  //productBaseUrl = 'http://192.168.99.100:3000/product';
  productBaseUrl = 'http://localhost:3000/product';
  orderBaseUrl = 'http://localhost:3000/order';

  constructor(private httpClient: HttpClient) { }

  async getAllProducts() {
    const result = await this.httpClient.get<any>(`${this.productBaseUrl}/get`).toPromise();
    return result.products;
  }

  async getProduct(id: string) {
    const result = await this.httpClient.get<any>(`${this.productBaseUrl}/get/${id}`).toPromise();
    return result.products;
  }

  async updateProduct(id: string, product: Product) {
    const result = await this.httpClient.put<any>(`${this.productBaseUrl}/update/${id}`, product).toPromise();
    return result.products;
  }

  async deleteProduct(id: string) {
    const result = await this.httpClient.delete<any>(`${this.productBaseUrl}/delete/${id}`).toPromise();
    return result;
  }

  async createProduct(product: Product) {
    const result = await this.httpClient.post<any>(`${this.productBaseUrl}/create`, product).toPromise();
    return result.products;
  }

  async getAllOrders() {
    const result = await this.httpClient.get<any>(`${this.orderBaseUrl}/get`).toPromise();
    return result.orders;
  }

  async getOrder(id: string) {
    const result = await this.httpClient.get<any>(`${this.orderBaseUrl}/get/${id}`).toPromise();
    return result.orders;
  }

  async updateOrder(id: string, order: Order) {
    const result = await this.httpClient.put<any>(`${this.orderBaseUrl}/update/${id}`, order).toPromise();
    return result.orders;
  }

  async deleteOrder(id: string) {
    const result = await this.httpClient.delete<any>(`${this.orderBaseUrl}/delete/${id}`).toPromise();
    return result;
  }

  async createOrder(order: Order) {
    const result = await this.httpClient.post<any>(`${this.orderBaseUrl}/create`, order).toPromise();
    return result.orders;
  }
}
