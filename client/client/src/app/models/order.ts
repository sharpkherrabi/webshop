import {Product} from "./product";
import { AriaDescriber } from '@angular/cdk/a11y';

export class Orderer{
  firstname: string;
  lastname: string;
}
export class Address{
  street: string;
  houseNr: string;
  zip: string;
  city: string;
  country: string;
  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}

export class ProductInfo{
  id: string;
  quantity: number;
  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}

export class Order {
  orderer: Orderer;
  email: string;
  address: Address;
  products: ProductInfo[];
  date: Date;
  paymentMethod: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
