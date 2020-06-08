import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../book';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-scripting',
  templateUrl: './scripting.component.html',
  styleUrls: ['./scripting.component.css']
})
export class ScriptingComponent implements OnInit {

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
  .getBooksByCategory("Scripting")
  .subscribe((data:any) => {
    console.log(data);
    this.books = data;
  });
}

}
