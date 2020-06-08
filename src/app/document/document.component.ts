import { Component, OnInit, Input } from '@angular/core';
import { Book } from './book';
import { BookService } from './book.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  private books : Book[] = [];

  selectedBook : Book;

  book : Book;

  constructor(private http: HttpClient, private bookService: BookService) { }

  ngOnInit() {
      this.getBooks();
  }

  onSelect(book : Book): void{
    console.log(book);
    this.selectedBook = book;
  }

  getBooks() : void {
    console.log("Inside component "+ this.books);
    this.bookService
    .getBooks()
    .subscribe((data:any) => {
      console.log(data);
      this.books = data;
    });
  }
}
