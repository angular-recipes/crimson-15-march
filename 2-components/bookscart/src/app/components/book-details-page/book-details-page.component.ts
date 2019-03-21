import { BookService } from './../../services/book.service';
import { Book } from './../../models/book';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book-details-page',
  templateUrl: './book-details-page.component.html',
  styleUrls: ['./book-details-page.component.css']
})
export class BookDetailsPageComponent implements OnInit {
  book: Book;
  constructor(
    private route: ActivatedRoute, 
    private bookService: BookService,
    private router: Router
  ) { }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
    this.book = this.bookService.getBookById(id);
  }

  goHome() {
    this.router.navigate(['/home']);
  }

}
