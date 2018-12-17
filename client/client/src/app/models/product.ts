export class Product {
  name: string;
  description: string;


  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
