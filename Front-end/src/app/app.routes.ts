import { Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { PaymentComponent } from './payment/payment.component';
import { ProductListComponent } from './product-list/product-list.component';


// by default I have added ProductListComponent as start page
export const routes: Routes = [ { path: '', component: ProductListComponent },
{ path: 'cart', component: CartComponent },
{ path: 'payment', component: PaymentComponent },
{ path: 'productlisting', component: ProductListComponent }];
