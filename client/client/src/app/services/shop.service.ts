import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  baseUrl = 'http://localhost:3000/product';

  constructor(private httpClient: HttpClient) { }

  async getAllItems() {
    const result = await this.httpClient.get<any>(this.baseUrl).toPromise();
    return result.data;
  }

  async getSingleItem(id: string) {
    const result = await this.httpClient.get<any>(`${this.baseUrl}/${id}`).toPromise();
    return result.data;
  }


}
