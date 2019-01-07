export class Product {
  name: string;
  description: string;
  quantity: number;
  mass: number;
  unitPrice: number;
  image: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
