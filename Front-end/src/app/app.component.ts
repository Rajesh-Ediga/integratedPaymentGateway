import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { ProductListModule } from './product-list/product-list.module';
import { ProductService } from './services/product.service';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,ProductListModule],
  providers: [ProductService, CartService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'payment-gateway';
  cartItemCount: number = 0;
  constructor(private router: Router,private cartService: CartService) {}
  ngOnInit(): void {
    // Subscribe to changes in cart item count
    this.cartService.cartItemCount$.subscribe((count) => {
      this.cartItemCount = count;
    });
  }

  goTohome() {
    this.router.navigate(['/']); // Assuming '/' is the route path for your home page
  }
  goToCart(): void {
    this.router.navigate(['/cart']); // Assuming 'cart' is the route path for your cart page
  }
}