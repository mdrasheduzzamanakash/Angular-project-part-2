import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BookCartComponent } from './book-cart/book-cart.component';

@NgModule({
  declarations: [BookCartComponent],
  imports: [CommonModule],
  exports: [BookCartComponent],
})
export class BookModule {}
