import { Component, OnInit } from '@angular/core';
import { Document } from '../document';
import { DocumentService } from '../document.service';
import { FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddDocumentComponent implements OnInit {

  private document = new Document();

  private documents : Document[] = [];

  constructor(private documentService : DocumentService) { }

  ngOnInit() {
  }

  addDocument() : void{
    console.log("Inside add document");
    this.documentService.addDocument(this.document)
      .subscribe(document => this.documents.push(document));
  }

  deleteDocument() : void{
    console.log("Inside delete document");
    this.documentService.deleteDocument(this.document.documentName)
      .subscribe();
  }
}