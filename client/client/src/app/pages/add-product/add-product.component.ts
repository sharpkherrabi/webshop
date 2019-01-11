import { Component, OnInit } from '@angular/core';
import { ShopService } from '../../services/shop.service';
import { Product } from '../../models/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  product: Product;

  constructor(private shopService: ShopService, private router: Router) { }

  ngOnInit() {
    this.product = new Product;
  }

  async onSaveClicked() {
    try {
      const res = await this.shopService.createProduct(this.product);
      console.log(this.product.name);
      /** Go to all products list only of all data was provided */
      if (res.status === 201) {
        console.log(res.error.message);
        this.router.navigate(['/dashboard']);

      }
    } catch (error) {
      console.log(error);
    }
  }

}
