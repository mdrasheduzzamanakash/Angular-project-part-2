import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/books.service';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-story-books',
  templateUrl: './story-books.component.html',
  styleUrls: ['./story-books.component.css'],
  providers: [BooksService, CartService],
})
export class StoryBooksComponent implements OnInit {
  constructor(
    private booksServices: BooksService,
    private cartServices: CartService
  ) {}

  storyBooks : any[] = this.booksServices.getStroryBooks();

  addCartItem(name : string) {
    this.cartServices.setCartsStoryNames(name);
    console.log(this.cartServices.getStroryNames())
  }

  ngOnInit(): void {}
}
