export class Product {

  name: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
