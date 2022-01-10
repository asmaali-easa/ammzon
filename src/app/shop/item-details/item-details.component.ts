import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/product-service';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent implements OnInit {
  product: any;
  relatedProducts: any;
  current_rating = 0;
  current_review = "";
  name = ""
  email = ""
  x1 = false
  x2 = false
  x3 = false
  x4 = false
  x4_comment = "Your email is required"

  constructor(private productsService: ProductsService, private route: ActivatedRoute, private router: Router, private messageService: MessageService) {
    this.changeProduct();
    router.events.subscribe(() => { this.changeProduct() });
  }

  ngOnInit(): void { }

  changeProduct() {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('itemId'));

    var products = this.productsService.products;
    this.product = products.find(product => product.id == productIdFromRoute);

    this.relatedProducts = products.filter((product: any) => {
      return product.category == this.product.category && product.id != this.product.id;
    })
    this.relatedProducts = [this.relatedProducts[0], this.relatedProducts[1], this.relatedProducts[2]];

    window.scroll(0, 0)
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

  submit_review() {
    this.x1 = this.current_rating == 0
    this.x2 = this.current_review == ""
    this.x3 = this.name == ""

    if (this.email == "") {
      this.x4 = true;
      this.x4_comment = "Your email is required";
    }
    else if (!this.email.includes('@') || !this.email.includes('.')) {
      this.x4 = true;
      this.x4_comment = "Please enter a valid email";
    }
    else {
      this.x4 = false;
    }

    if (!(this.x1||this.x2||this.x3||this.x4)) {
      this.messageService.add({severity:'success', summary:'Review added success', detail: 'Your review is awaiting approval!'});

      this.current_rating = 0
      this.current_review = ""
      this.name = ""
      this.email = ""
    }
  }
}
