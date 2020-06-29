import { Component, OnInit } from '@angular/core';
import { Document } from '../document';
import { DocumentService } from '../document.service';
import { FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-adddocument',
  templateUrl: './adddocument.component.html',
  styleUrls: ['./adddocument.component.css']
})
export class AddDocumentComponent implements OnInit {

  private document = new Document();

  private documents : Document[] = [];

  constructor(private documentService : DocumentService) { }

  showMsg: boolean = false;

  ngOnInit() {
  }

  addDocument() : void{
    console.log("Inside add document" + this.document);
    this.documentService.addDocument(this.document)
      .subscribe(document => {
        this.documents.push(document)
        this.showMsg= true;
      });
  }

  deleteDocument() : void{
    console.log("Inside delete document");
    this.documentService.deleteDocument(this.document.documentName)
      .subscribe();
  }
}
