import { Book } from './../models/book';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private books: Book[];
  constructor() { 
    this.books = [
      new Book(
        'The Alchemist',
        'Paulo Cohelo',
        23,
        4
      ),
      new Book(
        'Five point someone',
        'Chetan Bhagat',
        33,
        1
      ),
      new Book(
        'The monk who sold his ferrari',
        'Robin sharma',
        13,
        3
      ),
      new Book(
        'Power of now',
        'Eckhart tolle',
        15,
        5
      )
    ];
  }

  getBooks() {
    return this.books;
  }

  rateUp(book: Book) {
    if(book.rating < 5)
    book.rating++;
  }

  rateDown(book: Book) {
    if(book.rating > 1)
    book.rating--;
  }

  addBook(book: Book) {
    this.books.unshift(book);
  }
 }
