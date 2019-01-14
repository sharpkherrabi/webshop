import { Inject, Injectable } from '@angular/core';
import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service';
import { Product } from "../models/product";
import * as _ from 'lodash';
// key that is used to access the data in local storage
const STORAGE_KEY = 'local_storage';

@Injectable({
	providedIn: 'root'
})
export class LocalStorageService {
	localCart: Product[];

	constructor(@Inject(SESSION_STORAGE) private storage: StorageService) { }

	public storeOneToStorage(product: Product) {

		//get array from local storage
		this.localCart = this.storage.get(STORAGE_KEY) || [];
		// push new task to array
		this.localCart.push(product);
		// insert updated array to local storage
		this.storage.set(STORAGE_KEY, this.localCart);
	}

	public storeProductsToStorage(products: Product[]) {
		this.storage.set(STORAGE_KEY, products);
	}

	async getLocalStorage() {
		return await this.storage.get(STORAGE_KEY);
	}

	async deleteLocalStorage() {
		return await this.storage.remove(STORAGE_KEY);
	}

	isLocalStorageSet() {
		return !_.isNull(this.storage.get(STORAGE_KEY));
	}
}
