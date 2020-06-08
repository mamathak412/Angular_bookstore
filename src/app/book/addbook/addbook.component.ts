import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';
import { FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {

  private book = new Book();

  private books : Book[] = [];

  constructor(private bookService : BookService) { }

  ngOnInit() {
  }

  addBook() : void{
    console.log("Inside add book");
    this.bookService.addBook(this.book)
      .subscribe(book => this.books.push(book));
  }

  deleteBook() : void{
    console.log("Inside delete book");
    this.bookService.deleteBook(this.book.bookImage)
      .subscribe();
  }

  onFileUpload(event){
    const file = event.target.files[0]
    }

}
