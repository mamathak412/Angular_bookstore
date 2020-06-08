import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../book';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-maven',
  templateUrl: './maven.component.html',
  styleUrls: ['./maven.component.css']
})
export class MavenComponent implements OnInit {

  
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
  .getBooksByCategory("Maven")
  .subscribe((data:any) => {
    console.log(data);
    this.books = data;
  });
}


}
