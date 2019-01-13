import { Component, OnInit } from '@angular/core';
import { ShopService } from '../../services/shop.service';
import { Product } from '../../models/product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductItemDetailComponent } from '../product-item-detail/product-item-detail.component';
import _ from 'lodash';


@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  product: any;
  id: any;
  private updatedProduct: Product;
  constructor(private shopService: ShopService,private route: ActivatedRoute, private router: Router) { 
    this.route.params.subscribe( params => this.id = params.id);
    console.log("ID im constuctor: " + this.id);
  }

  ngOnInit() {
    console.log("ID im ngOnInit: " + this.id);
    this.shopService.getProduct(this.id).then((product)=>{
      this.product = product[0];
      console.log("Product NAME im ngONINIT: " + this.product.name);
    });
  }

  async onSaveClicked(){    
    try {
      if(this.product.name.length > 0 && this.product.unitPrice > 0 && this.product.description.length > 100 && this.product.quantity > 0){
        await this.shopService.updateProduct(this.id, this.product);
      
        this.router.navigate(['/dashboard']);
      }          
    } catch (error) {
      console.log('Update error in DetailComponent'+ error);
    }
  }

}

