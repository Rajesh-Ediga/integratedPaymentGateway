// product-list.module.ts

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CartComponent } from '../cart/cart.component';
import { ProductListComponent } from './product-list.component';

@NgModule({
  declarations: [ProductListComponent,CartComponent],
  imports: [CommonModule],
})
export class ProductListModule {}
