import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from './../../models/product';
import { ShopService } from './../../services/shop.service';
@Component({
	selector: 'app-search',
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
	@Output() broadcastSearchResult = new EventEmitter<Product[]>();
	constructor(private shopService: ShopService) { }

	ngOnInit() {
	}

	async searchInAll(query: String) {
		let foundedResults = await this.shopService.searchInNameAndDescription(query);
		if (foundedResults.status === 'OK') {
			this.broadcastSearchResult.emit(foundedResults.products);
		}
	}

	onKey(event: any) { // without type info
		this.searchInAll(event.target.value);
	}
}
