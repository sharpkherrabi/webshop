import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  baseUrl = 'http://localhost:3000/product';

  constructor(private httpClient: HttpClient) { }

  async getAllProducts() {
    const result = await this.httpClient.get<any>(`${this.baseUrl}/get`).toPromise();
    return result.products;
  }

  async getProduct(id: string) {
    const result = await this.httpClient.get<any>(`${this.baseUrl}/get/${id}`).toPromise();
    return result.products;
  }

  async updateProduct(id: string, product: Product) {
    const result = await this.httpClient.put<any>(`${this.baseUrl}/update/${id}`, product).toPromise();
    return result.data;
  }

  async deleteProduct(id: string) {
    const result = await this.httpClient.delete<any>(`${this.baseUrl}/delete/${id}`).toPromise();
    return result;
  }

  async createProduct(product: Product) {
    const result = await this.httpClient.post<any>(`${this.baseUrl}/create`, product).toPromise();
    return result.data;
  }

}
