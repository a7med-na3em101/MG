import { Component } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css',
})
export class ShopComponent {
  details: any[] = [];
  item: any;
  constructor(private producted : ProductService) {
    this.details = this.producted.product;
  }
}
