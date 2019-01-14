import { Component, OnInit } from '@angular/core';
import { ShopService } from '../../services/shop.service';
import { Product } from '../../models/product';
import { Router } from '@angular/router';
<<<<<<< HEAD

=======
import * as _ from 'lodash';
>>>>>>> develop
@Component({
	selector: 'app-add-product',
	templateUrl: './add-product.component.html',
	styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

	private product: Product;
	private showPic: boolean;

	constructor(private shopService: ShopService, private router: Router) { }

<<<<<<< HEAD
  async onSaveClicked() {
    try {
      await this.shopService.createProduct(this.product);
      /** Go to all products list only of all data was provided */
      if (this.product.name.length > 4 && this.product.unitPrice > 0 && this.product.description.length > 24 && this.product.quantity > 1) {
        this.router.navigate(['/dashboard']);

      }
    } catch (error) {
    }
  }
  setShowPic(value){
    if(value.length > 0)
      this.showPic = true;
    else
      this.showPic = false;
  }
=======
	ngOnInit() {
		this.product = new Product;
		this.showPic = false;
	}

	async onSaveClicked() {
		try {
			/** Go to all products list only of all data was provided */
			if (this.product.name.length > 4 && this.product.unitPrice > 0 && this.product.description.length > 24 && this.product.quantity > 1) {
				const createdProduct = await this.shopService.createProduct(this.product);
				if (_.includes(createdProduct.status, 'SUCCESSFULLY'))
					this.router.navigate(['/dashboard']);
			}
		} catch (error) {
			console.log(error);
		}
	}
	setShowPic(value) {
		if (value.length > 0)
			this.showPic = true;
		else
			this.showPic = false;
	}
>>>>>>> develop

}
