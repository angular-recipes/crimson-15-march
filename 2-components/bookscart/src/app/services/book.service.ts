import { Book } from './../models/book';
import { Injectable } from '@angular/core';
import { Observable, pipe } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private books: Book[];
  private url = 'http://localhost:3000/books/';

  constructor(private http: HttpClient) {
  }

  getBooks(): Observable<Book[]> {
    return this.http
      .get<Book[]>(this.url)
      .pipe(
        map(books => books.concat(new Book('Test', 'Test', 1, 1))),
        tap( books => console.log(books))
      )
      ;
  }

  rateUp(book: Book) {
    if (book.rating < 5)
      book.rating++;
    return this.http.put(this.url + book.id, book);
  }

  rateDown(book: Book) : Observable<Book> {
    if (book.rating > 1)
      book.rating--;
    return this.http.put<Book>(this.url + book.id, book);
  }

  addBook(book: Book) : Observable<Book> {
    return this.http.post<Book>(this.url, book);
  }

  getBookById(id: number): Observable<Book> {
    return this.http.get<Book>(this.url + id);
  }

  search(text: string) : Observable<Book[]> {
    return this.http.get(this.url + '?q=' + text);
  }
}
