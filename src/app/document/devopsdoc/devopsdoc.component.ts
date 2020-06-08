import { Component, OnInit } from '@angular/core';
import { DocumentService } from '../document.service';
import { Document } from '../document';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-devopsdoc',
  templateUrl: './devopsdoc.component.html',
  styleUrls: ['./devopsdoc.component.css']
})
export class DevopsDocComponent implements OnInit {

  private documents : Document[] = [];

  selectedDocument : Document;

  document : Document;

  constructor(private http: HttpClient, private documentService: DocumentService) { }

  ngOnInit() {
    this.getDocuments();
}

onSelect(document : Document): void{
  console.log(document);
  this.documentService.deleteDocument(document.documentName)
    .subscribe();
}

getDocuments() : void {
  console.log("Inside component "+ this.documents);
  this.documentService
  .getDocumentsByCategory("Devops")
  .subscribe((data:any) => {
    console.log(data);
    this.documents = data;
  });
}


deleteDocument() : void{
  console.log("Inside delete document");
  this.documentService.deleteDocument(this.document.documentName)
    .subscribe();
}

}
