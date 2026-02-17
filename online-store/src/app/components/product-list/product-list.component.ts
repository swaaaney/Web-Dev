import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card.component';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'Iphone 15',
      description: 'Apple smartphone with A17 chip.',
      price: 380_000,
      rating: 4.9,
      image: 'https://gadgetstore.kz/wa-data/public/shop/products/62/07/762/images/2359/2359.970.png',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hea/h39/83559339655198.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h22/hf6/83559333953566.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h71/hd3/83559331921950.png?format=gallery-medium'
      ],
      link: 'https://l.kaspi.kz/shop/EMbcvM1PKNGDdV6'
    },
     {
      id: 2,
      name: 'Macbook Air 13',
      description: 'Apple laptop with 16 Gb.',
      price: 460_000,
      rating: 5.0,
      image: 'https://gadgetstore.kz/wa-data/public/shop/products/95/04/495/images/1813/1813.970.jpeg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p60/p35/16711033.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p7c/p35/16711032.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p98/p35/16711031.jpg?format=gallery-medium'
      ],
      link: 'https://l.kaspi.kz/shop/A3yPH3BxmFBaKMG'
    },
    {
      id: 3,
      name: 'Samsung Smart tv',
      description: '109 cm black tv.',
      price: 170_000,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h70/hca/63880820457502.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h4f/h4d/63880826617886.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h4b/h75/63880828715038.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h49/h20/63880832253982.jpg?format=gallery-medium'
      ],
      link: 'https://l.kaspi.kz/shop/4nSWZwyb5koXXfd'
    },
    {
      id: 4,
      name: 'Apple Watch Gen 2',
      description: '44 mm beige SE GPS',
      price: 150_000,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p9c/pa2/6922038.png?format=gallery-medium',
      images: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLMSdrWndHu6yITnH2vut2k20TU4dxapapTA&s',
        'https://resources.cdn-kaspi.kz/img/m/p/p24/pa5/6922040.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p41/pa5/6922041.png?format=gallery-medium'
      ],
      link: 'https://l.kaspi.kz/shop/9KtXUCocwsnoPzf'
    },
    {
      id: 5,
      name: 'Marshal Major',
      description: ' headphones Vth generation',
      price: 70_000,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pdc/p92/8020134.jpg?format=gallery-medium',
      images: [
        'https://api.2droida.ru/storage/products/720b6f1e0ab88f2eed2fe87f9f167d6b/4155/7ccc4941ffae01529e16628445ea042e.jpg',
        'https://t-lider.com/upload/ammina.optimizer/jpg-webp/q80/upload/resize_cache/iblock/610/4sjvpr2g026acmsuudtn2s7vjwji73kl/600_600_140cd750bba9870f18aada2478b24840a/23be84f3-e466-11ef-80bc-000c29234796_179a6d6e-e51a-11ef-80bc-000c29234796.resize1.webp',
        'https://vektorzvuka.com.ua/images/headphones/marshall-major-5/marshall-major-5-brown_desc01.webp'
      ],
      link: 'https://l.kaspi.kz/shop/2rGzAFiChoqsx1U'
    },
    {
      id: 6,
      name: 'Smart Speaker',
      description: 'Yandex Station Midi Black',
      price: 97_000,
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hbd/h09/84530104467486.jpg?format=gallery-medium',
      images: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCWGQB_I3abhnkM0TAnH8j8xIHHl2uWjDL-g&s',
        'https://resources.cdn-kaspi.kz/img/m/p/h6f/h82/84530104533022.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h75/h9b/84530104598558.jpg?format=gallery-medium'
      ],
      link: 'https://l.kaspi.kz/shop/EG5sK6oeLgMRmjE'
    },
    {
      id: 7,
      name: 'Fridge Samsung',
      description: 'RB30A30N0SA/WT grey',
      price: 270_000,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h33/h7d/64009642344478.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h0c/hb7/64009644736542.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h12/hc0/64009647587358.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/he6/hd8/64009649782814.jpg?format=gallery-medium'
      ],
      link: 'https://l.kaspi.kz/shop/3BfnZupWHk3TsC3'
    },
    {
      id: 8,
      name: 'Vacuum Cleaner DREAME',
      description: 'H13 Pro Plus Mix black',
      price: 160_000,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h42/h49/86661970264094.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h91/h3e/86661970657310.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h98/hd2/86661970526238.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h0c/h83/86661971509278.jpg?format=gallery-medium'
      ],
      link: 'https://l.kaspi.kz/shop/DNjLxY6GYvKhXUs'
    },
    {
      id: 9,
      name: 'Apple Airpods Pro',
      description: '2nd generation with Wireless MagSafe Charging Case',
      price: 160_000,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/84108189630494.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h03/h0e/84108189696030.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h14/h8a/84108189761566.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h34/he4/84108189892638.jpg?format=gallery-medium'
      ],
      link: 'https://l.kaspi.kz/shop/HkCjqMg8d7va7S9'
    },
    {
      id: 10,
      name: 'Washing machine',
      description: 'ARG JG60-A112VE white',
      price: 100_000,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p4a/pc5/11196758.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p11/pc5/11196756.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p2d/pc5/11196757.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pd2/pc7/11196760.png?format=gallery-medium'
      ],
      link: 'https://l.kaspi.kz/shop/3o8Uk8eUWTKpvcK'
    },
  ];
}