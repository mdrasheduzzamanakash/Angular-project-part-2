import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-book-cart',
  templateUrl: './book-cart.component.html',
  styleUrls: ['./book-cart.component.css'],
})
export class BookCartComponent implements OnInit {
  constructor() {}

  @Input() book: any = {}

  @Output() clickEventEmitter = new EventEmitter<string>();

  addCart() {
    this.clickEventEmitter.emit(this.book.name);    
  }

  ngOnInit(): void {}
}
