import { Component, OnInit, Input } from '@angular/core';
import { Document } from './document';
import { DocumentService } from './document.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class DocumentComponent implements OnInit {

  private documents : Document[] = [];

  selectedDocument : Document;

  document : Document;

  constructor(private http: HttpClient, private documentService: DocumentService) { }

  ngOnInit() {
      this.getDocuments();
  }

  onSelect(document : Document): void{
    console.log(document);
    this.selectedDocument = document;
  }

  getDocuments() : void {
    console.log("Inside component "+ this.documents);
    this.documentService
    .getDocuments()
    .subscribe((data:any) => {
      console.log(data);
      this.documents = data;
    });
  }
}
