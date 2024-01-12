// payment.component.ts

import { Component, OnInit } from '@angular/core';
import { PayPalScriptService } from '../paypal-script.service';
import { PaymentService } from '../services/payment.service';


@Component({
  selector: 'app-payment',
  template: `
    <div id="paypal-button-container"></div>
  `,
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(private paymentService: PaymentService, private paypalScriptService: PayPalScriptService) { }

  async ngOnInit(): Promise<void> {
    await this.paypalScriptService.loadPayPalScript();
    this.paymentService.initializePayPalButton(
      () => {
        console.log('Payment successful');
        // Add any additional logic for payment success
      },
      () => {
        console.log('Payment error');
        // Add any additional logic for payment error
      }
    );
  }
}
