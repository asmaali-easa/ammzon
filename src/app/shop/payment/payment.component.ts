import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem, MessageService } from 'primeng/api';
import { ProductsService } from 'src/app/services/product-service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  paymentMethod: any
  paymentMethods: any[] = [{name: 'Cash on delivery', key: 'A'}, {name: 'Pay with visa', key: 'B'}];

  coupon:any
  x = false
  subtotal: any
  shipping = 45
  discount = 0
  total: any

  items: MenuItem[] = [
    {label: 'Cart Items'},
    {label: 'Shipping'},
    {label: 'Payment'},
    {label: 'Confirmation'}
  ];

  constructor(private router: Router, private productsService: ProductsService, private messageService: MessageService) {
    this.paymentMethod = this.paymentMethods[0];
    this.subtotal = this.get_total_cart_items()
    this.total = this.subtotal + this.shipping - this.discount
  }

  get_total_cart_items() {
    return this.productsService.get_total_cart_items();
  }

  ngOnInit(): void {
  }

  apply() {
    if (this.coupon == "AMMZ") {
      this.discount = 100
      this.messageService.add({severity:'success', summary:'Success', detail: 'Coupon added successfully!'});
      this.coupon = ""
      this.total = this.subtotal + this.shipping - this.discount
      this.x = false
    } else {
      this.x = true
    }
  }

  next() {
    localStorage.removeItem('name');
    localStorage.removeItem('selectedState');
    localStorage.removeItem('city');
    localStorage.removeItem('street');
    localStorage.removeItem('phone');
    localStorage.removeItem('email');
    localStorage.removeItem('notes');

    this.productsService.current_user.cart_list = []
    localStorage.setItem('users', JSON.stringify(this.productsService.users));
  }
}
