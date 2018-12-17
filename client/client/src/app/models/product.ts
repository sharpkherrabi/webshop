export class Product {
  _id?: string;
  name: string;
  description: string;


  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
