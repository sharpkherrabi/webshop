import {Product} from "./product";

export class Order {
  firstname: string;
  lastname: string;
  email: string;
  phoneNumber: string;
  //billingAdress:
  billingStreet: string;
  billingCity: string;
  billingState: string; // or province
  billingPostalCode: number;
  billingCountry: string;
  //shippingAdress:
  shippingStreet: string;
  shippingCity: string;
  shippingState: string; // or province
  shippingPostalCode: number;
  shippingCountry: string;

  products: Product[];

  addidtionalRequests: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
