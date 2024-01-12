// product.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  getProducts() {
    // Simulate fetching product data from a server try to implement an API and use the columns like below 
    return [
      { id: 1, name: 'Product 1', price: 10, imageUrl: 'assets/images/sample.jpg' },
      { id: 2, name: 'Product 2', price: 20, imageUrl: 'assets/images/sample2.jpg' },
    ];
  }
}
