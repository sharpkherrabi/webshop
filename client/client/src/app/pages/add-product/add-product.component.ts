import { Component, OnInit } from '@angular/core';
import { ShopService } from '../../services/shop.service';
import { Product } from '../../models/product';
import { Router } from '@angular/router';
import _ from 'lodash';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  private product: Product;

  constructor(private shopService: ShopService, private router: Router) { }

  ngOnInit() {
    this.product = new Product;
  }

  async onSaveClicked() {
    try {
      await this.shopService.createProduct(this.product);
      console.log(this.product.name);
      /** Go to all products list only of all data was provided */
      if (this.product.name.length > 0 && this.product.unitPrice > 0 && this.product.description.length > 100 && this.product.quantity > 0) {
        console.log(this.product.name + " " + this.product.description);
        this.router.navigate(['/dashboard']);

      }
    } catch (error) {
      console.log(error);
    }
  }

}
