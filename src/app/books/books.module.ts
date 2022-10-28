import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AcadBooksComponent } from './acad-books/acad-books.component';
import { BookModule } from './book/book.module';
import { ProgBooksComponent } from './prog-books/prog-books.component';
import { StoryBooksComponent } from './story-books/story-books.component';

@NgModule({
  declarations: [ProgBooksComponent, AcadBooksComponent, StoryBooksComponent],
  imports: [CommonModule, BookModule],
  exports: [ProgBooksComponent, AcadBooksComponent, StoryBooksComponent],
})
export class BooksModule {}
