import { Component, OnInit } from '@angular/core';
import {Product} from "../../models/product";
import {ShopService} from "../../services/shop.service";
import {Router} from "@angular/router";
import {Observable} from 'rxjs';
import {BehaviorSubject, Observable, Subject, Subscriber} from 'rxjs';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  private itemsInCartSubject: BehaviorSubject<Product[]> = new BehaviorSubject([]);
  products: Product[] = [];
  splicedDataProducts: Product[] = []; // data to show on one page
  splicedData: Product[] = [];




  // MatPaginator Inputs
  pageSize = 10;

  constructor(private shopService: ShopService, private router: Router) {
    this.itemsInCartSubject.subscribe(_ => this.products = _);


  }

  public addToCart(item: Product) {
    this.itemsInCartSubject.next([...this.products, item]);
  }

  public getItems(): Observable<Product[]> {
    return this.itemsInCartSubject;
  }
  ngOnInit() {
    // for develop

    const cart: Product = {
      name: '2',
      description: 'test',
      quantity: 10,
      unitPrice: 123,
      mass: 50,
      image: 'https://images.pexels.com/photos/776656/pexels-photo-776656.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',

    };

    const p1: Product = {
      name: '1',
      description: 'texttexttext',
      quantity: 10,
      unitPrice: 9999,
      mass: 50,
      image: 'https://images.pexels.com/photos/776656/pexels-photo-776656.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',

    };
    const p4: Product = {
      name: '1',
      description: 'texttexttext',
      quantity: 10,
      unitPrice: 9999,
      mass: 50,
      image: 'https://images.pexels.com/photos/776656/pexels-photo-776656.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',

    };
    const p3: Product = {
      name: '1',
      description: 'asd',
      quantity: 10,
      unitPrice: 9999,
      mass: 50,
      image: 'https://images.pexels.com/photos/776656/pexels-photo-776656.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',

    };
    const p6: Product = {
      name: '1',
      description: 'texttexttext',
      quantity: 10,
      unitPrice: 9999,
      mass: 50,
      image: 'https://images.pexels.com/photos/776656/pexels-photo-776656.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',

    };
    const p5: Product = {
      name: '1',
      description: 'texttexttext',
      quantity: 10,
      unitPrice: 9999,
      mass: 50,
      image: 'https://images.pexels.com/photos/776656/pexels-photo-776656.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',

    };

    this.products = [p1,cart,p3,p4,p5,p6];
    this.splicedData = this.products.slice(((0 + 1) - 1) * this.pageSize).slice(0, this.pageSize);
  }
  public getTotalAmount(): Observable<number> {
    return this.itemsInCartSubject.map((items: Product[]) => {
      return items.reduce((prev, curr: Product) => {
        return prev + curr.price;
      }, 0);
    });
  }


}
