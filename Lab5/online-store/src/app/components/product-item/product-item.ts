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
  shareWhatsApp() {
  const url = this.product().link;
  window.open(`https://wa.me/?text=${encodeURIComponent(url)}`, '_blank');
  }
  shareTelegram() {
  const url = this.product().link;
  window.open(`https://t.me/share/url?url=${encodeURIComponent(url)}`, '_blank');
  }
  
  buy() {
  window.open(this.product().link, '_blank');
  }
}