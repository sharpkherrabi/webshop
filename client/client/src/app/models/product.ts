export class Product {
	_id?: string;
	name: string;
	__v?: number;
	description: string;
	quantity: number;
	mass: number;
	unitPrice: number;
	image: string;
	boughtQuantity?: number;

	constructor(values: Object = {}) {
		Object.assign(this, values);
	}
}
