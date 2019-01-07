export class Product {
  _id?: string;
  name: string;
  __v?: number;
  description: string;
  quantity: number;
  mass: number;
  unitPrice: number;
  image: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
