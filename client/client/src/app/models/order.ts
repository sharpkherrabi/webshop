import {Product} from "./product";
import { AriaDescriber } from '@angular/cdk/a11y';

<<<<<<< HEAD
export class Order {

  //Person
  firstname: string;
  lastname: string;
  email: string;
  phoneNumber: string;

  //Adress:
  street: string;
  city: string;
  state: string; // or province
  postalCode: number;
  country: string;
=======
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
>>>>>>> feature/checkout

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
