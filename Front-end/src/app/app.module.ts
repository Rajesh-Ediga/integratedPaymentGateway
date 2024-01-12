// app.module.ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { PaymentComponent } from './payment/payment.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductListModule } from './product-list/product-list.module';
import { CartService } from './services/cart.service';
import { ProductService } from './services/product.service';


// @NgModule({
//   declarations: [
//     AppComponent,
//     ProductListComponent ,
//     CartComponent,
//     PaymentComponent,
//     RouterModule
//   ],
//   imports: [ProductListModule,BrowserModule],
//   providers: [ProductService, CartService],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }
