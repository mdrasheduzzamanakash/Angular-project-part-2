import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BooksModule } from '../books/books.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, BooksModule],
  exports: [HomeComponent],
})
export class HomeModule {}
