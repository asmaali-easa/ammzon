import { Component } from '@angular/core';
import { ProductsService } from './services/product-service';
import { MenuItem } from 'primeng/api';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private productsService: ProductsService) { }

  search_text = '';
  
  items = [
    // {icon: 'pi pi-home'},
    {label: 'ammzon'},
    {label: 'Shop'},
    {label: 'All categories'},
  ];
  
  categories = [
    {label: 'All Categories', routerLink:'shop/home-page'},
    {label: 'Electronic Boards', routerLink:'shop/category/0'},
    {label: 'Measuring Instruments', routerLink:'shop/category/1'},
    {label: 'Wires & Crocodiles', routerLink:'shop/category/2'},
    {label: 'Motors & Drives', routerLink:'shop/category/3'},
    {label: 'Protectors / Inverters', routerLink:'shop/category/4'},
  ];

  cart_options = [
    {label: 'View Cart', routerLink:'shop/cart'},
    {label: 'Checkout', routerLink:'shop/shipping'}, // route to the current step
  ];

  cart_options2 = [
    {label: 'View Cart', routerLink:'shop/cart'},
    {label: 'Checkout', routerLink:'shop/shipping', disabled: true}, // route to the current step
  ];

  search() {
    this.productsService.search_text.next(this.search_text);
  }

  get_n_cart_items() {
    return this.productsService.get_n_cart_items();
  }

  get_total_cart_items() {
    return this.productsService.get_total_cart_items();
  }

  scrollUp() {
    window.scroll(0,0);
  }
}
