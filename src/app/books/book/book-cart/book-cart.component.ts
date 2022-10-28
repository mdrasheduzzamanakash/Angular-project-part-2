import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-cart',
  templateUrl: './book-cart.component.html',
  styleUrls: ['./book-cart.component.css'],
})
export class BookCartComponent implements OnInit {
  constructor() {}

  @Input() book: any = {}

  ngOnInit(): void {}
}
