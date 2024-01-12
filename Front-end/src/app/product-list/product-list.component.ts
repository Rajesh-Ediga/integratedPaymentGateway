// product-list.component.ts

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
 products:any;
  constructor(private productService: ProductService,   private cartService: CartService,private router: Router) { }

  ngOnInit() {
    // Fetch product data from the service
    this.products = this.productService.getProducts();
  }
  addToCart(product:any) {
    // Implement your logic to add the product to the cart
    this.cartService.addToCart(product);
  }
  goToCart() {
    this.router.navigate(['/cart']); // Assuming 'cart' is the route path for your cart page
  }
}
