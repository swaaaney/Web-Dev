import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './product-item.html',
  styleUrl: './product-item.css'
})
export class ProductItemComponent {

  product = input.required<Product>();
  delete = output<number>();

  like() {
    this.product().likes++;
  }

  remove() {
    this.delete.emit(this.product().id);
  }

  share() {
    const url = encodeURIComponent(this.product().link);
    window.open(`https://wa.me/?text=${url}`, '_blank');
  }
  buy() {
  window.open(this.product().link, '_blank');
  }
}