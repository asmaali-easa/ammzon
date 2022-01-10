import { Component, Input, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { User } from 'src/app/models/User';
import { ProductsService } from 'src/app/services/product-service';

@Component({
  selector: 'app-data-view',
  templateUrl: './data-view.component.html',
  styleUrls: ['./data-view.component.scss']
})
export class DataViewComponent implements OnInit {
  @Input() products: any;
  @Input() layout = "grid";
  @Input() show_header = false;
  @Input() rows = 9;
  @Input() product_detailed = true;
  @Input() alwaysShowPaginator = true;
  current_user: User = new User;

  sortOptions = [
    { label: 'Default Sorting', value: 'id' },
    { label: 'Sort by Rating', value: '!rating' },
    { label: 'Sort by Price: Low to High', value: 'price' },
    { label: 'Sort by Price: High to Low', value: '!price' },
  ];
  sortOrder: any;
  sortField: any;

  constructor(private messageService: MessageService, private productsService: ProductsService) {
    this.current_user = productsService.current_user;
  }

  ngOnInit() { }

  onSortChange(event: any) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    }
    else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }

  addToFav(product_id: number) {
    this.productsService.toggle_fav(product_id)
    if(this.get_fav(product_id)) {
      this.messageService.add({severity:'success', summary:'Success', detail: 'Product added to wishlist'});
    }
  }

  addToCart(product_id: number) {
    this.productsService.add_to_cart(product_id);
    this.messageService.add({severity:'success', summary:'Success', detail: 'Product added to cart successfully'});
  }

  plus(product_id: number) {
    this.productsService.plus(product_id);
  }

  minus(product_id: number) {
    this.productsService.minus(product_id);
  }

  get_fav(product_id: number) {
    return this.productsService.get_fav(product_id);
  }

  get_count(product_id: number) {
    return this.productsService.get_count(product_id);
  }

  scrollUp() {
    window.scroll(0,0);
  }
}
