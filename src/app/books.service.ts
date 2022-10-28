import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  
  academicBooks: any[] = [
    {
      name: 'Academic Knowledge Construction',
      author: 'Doglus J. Loveless',
      price: 175,
      src: 'https://m.media-amazon.com/images/I/71mzhiFKXFL._AC_UY218_.jpg',
    },
    {
      name: 'Leading scholls with social, Emotional and Academic',
      author: 'Tara Madden-Dent and Deborah Oliver',
      price: 150,
      src: 'https://m.media-amazon.com/images/I/61KBEOR9qBL._AC_UY218_.jpg',
    },
    {
      name: 'Leading scholls with social, Emotional and Academic',
      author: 'Tara Madden-Dent and Deborah Oliver',
      price: 150,
      src: 'https://m.media-amazon.com/images/I/61ZfDmhIlPL._AC_UY218_.jpg',
    },
    {
      name: 'Leading scholls with social, Emotional and Academic',
      author: 'Tara Madden-Dent and Deborah Oliver',
      price: 150,
      src: 'https://m.media-amazon.com/images/I/61ZfDmhIlPL._AC_UY218_.jpg',
    },
  ];
  programmingBooks: any[] = [
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
  storyBooks: any[] = [
    {
      name: 'Bluey 5-Minute Stories',
      author: 'Bluey',
      price: 13,
      src: 'https://m.media-amazon.com/images/I/81DeG-RstrL._AC_UY218_.jpg',
    },
    {
      name: '365 Bedtime Stories and Rhymes',
      author: 'Bluey',
      price: 13,
      src: 'https://m.media-amazon.com/images/I/81-n+wEunHL._AC_UY218_.jpg',
    },
    {
      name: 'The First Notes: The Story of Do, Re, Mi',
      author: 'Bluey',
      price: 13,
      src: 'https://m.media-amazon.com/images/I/612eM+sx2RL._AC_UY218_.jpg',
    },
    {
      name: 'Five-Minute Stories - Over 50 Tales',
      author: 'Bluey',
      price: 13,
      src: 'https://m.media-amazon.com/images/I/81lYmyWJBcL._AC_UY218_.jpg',
    },
  ];

  getAcademicBooks(): any[] {
    return this.academicBooks;
  }
  getProgrammingBooks(): any[] {
    return this.programmingBooks;
  }
  getStroryBooks(): any[] {
    return this.storyBooks;
  }
  
  constructor() {}
}
