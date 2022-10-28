import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/books.service';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-acad-books',
  templateUrl: './acad-books.component.html',
  styleUrls: ['./acad-books.component.css'],
  providers: [BooksService, CartService],
})
export class AcadBooksComponent implements OnInit {
  constructor(
    private bookService: BooksService,
    private cartService: CartService,
  ) {}

  academicBooks: any[] = this.bookService.getAcademicBooks();

  addToCart(event: string) {
    // add to the service
    this.cartService.setCartAcaNames(event);
    // console.log(this.cartService.getAcaNames())
  }

  ngOnInit(): void {}
}
