import { BookService } from './../../services/book.service';
import { Book } from './../../models/book';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  books: Book[];
  today = new Date();
  //bookService: BookService;

  constructor(
    private bookService: BookService,
    private http: HttpClient
  ) {
    //this.bookService = bookService; 
  }

  ngOnInit() {
    // let beCallObservable = this.http.get('http://localhost:3000/books');
    // let observer = (res) => this.books = res;
    // beCallObservable.subscribe(observer);
    // console.log('at last line');
    
    this.http.get<Book[]>('http://localhost:3000/books')
      .subscribe(res => this.books = res);
  }

  rateUp(book: Book) {
    this.bookService.rateUp(book);
  }

  rateDown(book: Book) {
    this.bookService.rateDown(book);
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
