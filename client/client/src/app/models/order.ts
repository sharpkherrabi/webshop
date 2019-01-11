import {Product} from "./product";

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

  products: Product[];

  addidtionalRequests: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
