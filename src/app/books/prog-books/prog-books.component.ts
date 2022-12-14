import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-prog-books',
  templateUrl: './prog-books.component.html',
  styleUrls: ['./prog-books.component.css'],
  providers: [CartService],
})
export class ProgBooksComponent implements OnInit {
  constructor(private cartService : CartService) {}

  books = [
    {
      name: 'Clean Code',
      author: 'Robert C. Martin',
      price: 34,
      src: 'https://m.media-amazon.com/images/I/41xShlnTZTL._SX376_BO1,204,203,200_.jpg',
    },
    {
      name: 'The Hidden Language of Computer Hardware and Software',
      author: 'Charles Petzold',
      price: 27,
      src: 'https://m.media-amazon.com/images/I/310XfS4ZweL._AC_UY218_.jpg',
    },
    {
      name: 'The Body Code: Unlocking Your Body',
      author: 'Robert C. Martin',
      price: 7,
      src: 'https://m.media-amazon.com/images/I/71aIFJX5lpS._AC_UY218_.jpg',
    },
    {
      name: 'The Emotion Code',
      author: 'Dr. Bradley Nelson',
      price: 23,
      src: 'https://m.media-amazon.com/images/I/71r9MO2JHhL._AC_UY218_.jpg',
    },
  ];

  // carts : string[] = [
    
  // ]

  addToCart(name : string) {
    // console.log(event);
    // this.carts.push(event)
    // console.log(this.carts);
    this.cartService.setCartProgNames(name)
    // console.log(this.cartService.getCartProgNames());
  }

  ngOnInit(): void {}
}
