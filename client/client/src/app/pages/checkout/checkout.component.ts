import { Component, OnInit } from '@angular/core';
import {Product} from "../../models/product";
import {ShopService} from "../../services/shop.service";
import {Router} from "@angular/router";
import {LocalStorageService} from "../../services/local-storage.service";
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
  prods: Product[];

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
    this.productInfo = new ProductInfo;
    this.prods = [];


    this.localStorageService.getLocalStorage().then((products) => {
      this.cart = products;
      this.cartCount = products.length;
    });
  }


  //Here fill order with products info, post order and send to paypal route
  async onPayClicked(){
    for(let i=0; i < this.cart.length;i++){
      this.productInfo.id = this.cart[i]._id;
      console.log("test"+ this.productInfo.id);

      this.productInfo.quantity = 1;
      this.prods.push(this.productInfo);
    }

    try {
      await this.shopService.createOrder(this.order);
      console.log(this.order.product);

      this.router.navigate(['/dashboard']);


    } catch (error) {
      console.log(error);
    }
    console.log("City: "+this.order.address.city);
    console.log("Street: "+this.order.address.street);
    console.log("HouseNr: "+this.order.address.houseNr);
    console.log("ZIP: "+this.order.address.zip);
    console.log("email: "+this.order.email);
    console.log("Firstname: "+this.order.orderer.firstname);
    console.log("Lastname: "+this.order.orderer.lastname);



    }



}
