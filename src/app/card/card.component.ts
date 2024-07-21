import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  detail: any = {};
  table: any = [];
  constructor(private pro: ProductService, private routing: ActivatedRoute) {}
  ngOnInit() {
    this.table = this.pro.product;
    let Id = this.routing.snapshot.params['id'];
    let b = '';
    let a = '';
    for (let i = 0; i < Id.length; i++) {
      if (Id[i] == ':') {
        a = a + Id[i];
      } else {
        b = b + Id[i];
      }
    }
    Id = +b;
    for (let item = 0; item < this.pro.product.length; item++) {
      if (Id == this.pro.product[item].id) {
        console.log(this.pro.product[item]);
        this.detail = this.pro.product[item];
      }
    }
  }
}
