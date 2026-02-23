import { Injectable } from '@angular/core';
import { Category } from '../models/category.model';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  categories: Category[] = [
    { id: 1, name: 'Smartphones' },
    { id: 2, name: 'Laptops' },
    { id: 3, name: 'Headphones' },
    { id: 4, name: 'Tablets' }
  ];

  products: Product[] = [
    {
      id: 1,
      name: 'Smartphone Apple iPhone 17 Pro',
      description: 'orange 12 GB/256 GB',
      price: 833_000 ,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p18/p96/64168413.png?format=gallery-medium',
      link: 'https://l.kaspi.kz/shop/3j9e44F7CuP5nyf',
      categoryId: 1,
      likes: 17
    },
    {
      id: 2,
      name: 'Smartphone Samsung Galaxy S25 Ultra',
      description: '5G 12 GB/1024 GB silver',
      price: 810_000,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p5f/p7f/20120496.png?format=gallery-medium',
      link: 'https://l.kaspi.kz/shop/5psiMtXRTiZxipE',
      categoryId: 1,
      likes: 12
    },
    {
      id: 3,
      name: 'Huawei Pura 80 Ultra',
      description: '16 GB/512 GB black',
      price: 640_000,
      rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pa8/p0d/62728978.png?format=gallery-medium',
      link: 'https://l.kaspi.kz/shop/6QpwZN7UETLHcES',
      categoryId: 1,
      likes: 9
    },
    {
      id: 4,
      name: 'Smartphone Apple iPhone 16',
      description: '8 GB/256 GB pink',
      price: 530_700,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h0b/he2/87295473680414.png?format=gallery-medium',
      link: 'https://l.kaspi.kz/shop/68835wgyVbk9ga2',
      categoryId: 1,
      likes: 12
    },
    {
      id: 5,
      name: 'Apple iPhone 15',
      description: '6 GB/128 GB green',
      price: 420_000,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h60/h8b/86303348686878.jpg?format=gallery-medium',
      link: 'https://l.kaspi.kz/shop/HjNbXrn8LrhRaT7https://kaspi.kz/shop/p/celimax-krem-pore-dark-spot-brightening-dlja-litsa-35-ml-128198467/?c=750000000&m=Glama',
      categoryId: 1,
      likes: 10
    },
    {
      id: 6,
      name: ' Apple MacBook Air 15',
      description: ' 2025 / 16 GB / SSD 256 GB / macOS / MW1G3',
      price: 675_700,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p4f/pae/50368146.jpg?format=gallery-medium',
      link: 'https://l.kaspi.kz/shop/GpDoU4WAWBAMgB5',
      categoryId: 2,
      likes: 11
    },
    {
      id: 7,
      name: 'Laptop Lenovo LOQ',
      description: ' Full HD Gaming Laptop 15.6" / 16 GB / SSD 512 GB / Win 11 Home / 83JC0OLYUS',
      price: 530_700,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p7e/p5d/89085369.jpeg?format=gallery-medium',
      link: 'https://l.kaspi.kz/shop/5QswwCVckbC6GFN',
      categoryId: 2,
      likes: 5
    },
    {
      id: 8,
      name: 'ThundeRobot 911 X Wild Hunter G2D',
      description: '15.6" / 16 GB / SSD 512 GB / Without OS / I5165SG45N',
      price: 699_000,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p5c/p64/59735836.png?format=gallery-medium',
      link: 'https://l.kaspi.kz/shop/4K7jkSiWYpBcUzP',
      categoryId: 2,
      likes: 8
    },
    {
      id: 9,
      name: ' MECHREVO KuangShi X Pro',
      description: '16" / 32 GB / SSD 1000 GB / Win 11 Pro / I914900HX32G1T000GQHD300HZ',
      price: 1_229_900,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p6f/p09/45297696.jpg?format=gallery-medium',
      link: 'https://l.kaspi.kz/shop/2kk4o3t2DMfKMou',
      categoryId: 2,
      likes: 7
    },
    {
      id: 10,
      name: 'ASUS FX707ZC4-HX099',
      description: '17.3" / 16 GB / SSD 512 GB / Without OS / 90NR0GX1-M00730',
      price: 698_900,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h6a/h63/86511550365726.png?format=gallery-medium',
      link: 'https://l.kaspi.kz/shop/B7qs1waMvoKqEGD',
      categoryId: 2,
      likes: 12
    },
    {
      id: 11,
      name: 'Apple AirPods Pro',
      description: '2nd generation with Wireless MagSafe Charging Case white',
      price: 184_500,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/84108189630494.jpg?format=gallery-medium',
      link: 'https://l.kaspi.kz/shop/HkCjqMg8d7va7S9',
      categoryId: 3,
      likes: 6
    },
    {
      id: 12,
      name: 'Marshall Major V',
      description: 'brown 5th generation',
      price: 76_000,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pdc/p92/8020134.jpg?format=gallery-medium',
      link: 'https://l.kaspi.kz/shop/2rGzAFiChoqsx1U',
      categoryId: 3,
      likes: 10
    },
    {
      id: 13,
      name: 'Sony WH-1000XM4',
      description: 'black',
      price: 489_600,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p64/pde/11569142.jpg?format=gallery-medium',
      link: 'https://l.kaspi.kz/shop/3XNkyGWX2isLe36',
      categoryId: 3,
      likes: 9
    },
    {
      id: 14,
      name: 'Huawei FreeClip',
      description: 'purple',
      price: 179_900,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h89/h0f/85254956482590.jpg?format=gallery-medium',
      link: 'https://l.kaspi.kz/shop/7Sdt7iNyL48E1Wi',
      categoryId: 3,
      likes: 11
    },
    {
      id: 15,
      name: 'Samsung Galaxy Buds FE ',
      description: 'grey',
      price: 64_900,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pa1/p7a/32685976.jpg?format=gallery-medium',
      link: 'https://l.kaspi.kz/shop/J89KtikmTD6uWb2',
      categoryId: 3,
      likes: 7
    },
    {
      id: 16,
      name: 'Samsung Galaxy Tab',
      description: 'A9+ 5G 11 inch 8 GB/128 GB silver',
      price: 179_900,
      rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h0b/hc4/84390016516126.jpg?format=gallery-medium',
      link: 'https://l.kaspi.kz/shop/HAQmht2N9xaWXXX',
      categoryId: 4,
      likes: 3
    },
    {
      id: 17,
      name: 'Xiaomi Redmi Pad SE',
      description: '11 inch 8 GB/256 GB gray',
      price: 107_600,
      rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h20/hd4/84163009151006.jpg?format=gallery-medium',
      link: 'https://l.kaspi.kz/shop/8Yg8pYaSKFMo1iD',
      categoryId: 4,
      likes: 5
    },
    {
      id: 18,
      name: 'Huawei MatePad SE',
      description: 'AGS6-W09 11 inch 4 GB/128 GB gray',
      price: 68_800,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h2b/h62/86746767261726.jpg?format=gallery-medium',
      link: 'https://l.kaspi.kz/shop/GdGcp4Tm5bpyW7Y',
      categoryId: 4,
      likes: 4
    },
    {
      id: 19,
      name: 'AIRSTAR G2000',
      description: '10 inch 16 GB/512 GB black',
      price: 38_000,
      rating: 4.4,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pc0/pc4/109050907.jpeg?format=gallery-medium',
      link: 'https://l.kaspi.kz/shop/Gur7kPgUF7F5sYH',
      categoryId: 4,
      likes: 8
    },
    {
      id: 20,
      name: 'Apple iPad Air 11',
      description: '2025 Wi-Fi 11 inch 8 GB/128 GB blue',
      price: 312_200,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pbd/p8a/37020633.png?format=gallery-medium',
      link: 'https://l.kaspi.kz/shop/2KREeHe8BtB5Uaa',
      categoryId: 4,
      likes: 8
    }
  ];

  getCategories() {
    return this.categories;
  }

  getProductsByCategory(categoryId: number) {
    return this.products.filter(p => p.categoryId === categoryId);
  }
}