export class Product {
  name: string;
  description: string;
  quantity: number;
  unitPrice: number;
  mass: number;
  image: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
