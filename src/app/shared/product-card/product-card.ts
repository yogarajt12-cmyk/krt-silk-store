import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  standalone: false,
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
  @Input() product!: {
    name: string;
    price: number;
    image: string;
  };
}
