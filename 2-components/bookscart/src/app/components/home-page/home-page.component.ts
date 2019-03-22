import { Observable } from 'rxjs';
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
  books$: Observable<Book[]>; 
  today = new Date();
  searchResults: Book[];
  //bookService: BookService;

  constructor(
    private bookService: BookService
  ) {
    //this.bookService = bookService; 
  }

  ngOnInit() {
    // let beCallObservable = this.http.get('http://localhost:3000/books');
    // let observer = (res) => this.books = res;
    // beCallObservable.subscribe(observer);
    // console.log('at last line');
    
    // this.books$ = this.bookService.getBooks();
    this.bookService
      .getBooks()
      .subscribe(res => this.books = res);
  }

  rateUp(book: Book) {
    this.bookService.rateUp(book).subscribe();
  }

  search(text) {
    this.bookService
      .search(text)
      .subscribe(res => this.searchResults = res);
  }

  rateDown(book: Book) {
    this.bookService.rateDown(book).subscribe();
  }

  addBook(titleEl, authorEl, priceEl, ratingEl) {
    let newBook = new Book(
      titleEl.value,
      authorEl.value,
      +priceEl.value,
      +ratingEl.value,
    );
    this.bookService.addBook(newBook);
  }

}
