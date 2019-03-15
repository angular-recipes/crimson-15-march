import { BookService } from './../../services/book.service';
import { Book } from './../../models/book';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  books: Book[];

  constructor(bookService: BookService) { 
    this.books = bookService.getBooks();
  }

  ngOnInit() {
  }

  rateUp(book: Book) {
    if(book.rating < 5)
      book.rating++;
  }

  rateDown(book: Book) {
    if(book.rating > 1)
      book.rating--;
  }

  printElements(titleEl, authorEl, priceEl, ratingEl) {
    let newBook = new Book(
      titleEl.value,
      authorEl.value,
      +priceEl.value,
      +ratingEl.value,
    );
    this.books.unshift(newBook);
  }

}
