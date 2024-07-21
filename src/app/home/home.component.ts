import { Component } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
details: any[] = [];
item: any;
  constructor(private product: ProductService) {
    this.details = this.product.product;
  }

}
