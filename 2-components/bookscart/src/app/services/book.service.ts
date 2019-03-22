import { Book } from './../models/book';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BookService {
  private books: Book[];
  private url = 'http://localhost:3000/books/';

  constructor(private http: HttpClient) {
  }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.url);
  }

  rateUp(book: Book) {
    if (book.rating < 5)
      book.rating++;
    return this.http.put(this.url + book.id, book);
  }

  rateDown(book: Book) {
    if (book.rating > 1)
      book.rating--;
    return this.http.put(this.url + book.id, book);
  }

  addBook(book: Book) : Observable<Book> {
    return this.http.post<Book>(this.url, book);
  }

  getBookById(id: number): Book {
    return this.books[id - 1];
  }
}
