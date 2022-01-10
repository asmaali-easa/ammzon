import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/services/product-service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  products: any;
  filtered_products: any;
  layout = "grid";
  show_header = true;

  categories = ["Electronic Boards", "Measuring Instruments", "Wires & Crocodiles", "Motors & Drives", "Protectors / Stabilizers / Inverters"]
  current_category: any

  constructor(private productsService: ProductsService, private route: ActivatedRoute, private router: Router) {
    this.products = productsService.products;
    
    this.changeCategory();
    router.events.subscribe(() => {this.changeCategory()});

    this.productsService.search_text.subscribe((search_text) => {
      this.layout = search_text == ""? "grid": "list";
      this.show_header = search_text == "";
      this.filtered_products = this.products.filter((product:any) => {
        return product.name.toLowerCase().includes(search_text.toLowerCase()) && product.category == this.current_category;
      })
    })
  }

  ngOnInit(): void {
  }

  changeCategory() {
    const routeParams = this.route.snapshot.paramMap;
    const CategoryIdFromRoute = Number(routeParams.get('categoryId'));
    this.current_category = this.categories[CategoryIdFromRoute];
    this.filtered_products = this.products.filter((product:any) => {
      return product.name.toLowerCase().includes(this.productsService.search_text.value.toLowerCase()) && product.category == this.current_category;
    })
  }
}
