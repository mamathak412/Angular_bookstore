import { Component, OnInit } from '@angular/core';
import { DocumentService } from '../document.service';
import { Document } from '../document';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-mavendoc',
  templateUrl: './mavendoc.component.html',
  styleUrls: ['./mavendoc.component.css']
})
export class MavenDocComponent implements OnInit {

  
  private documents : Document[] = [];

  selectedDocument : Document;

  document : Document;

  searchText: string;

  // Pagination parameters.
  p: Number = 1;
  count: Number = 5;

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
  .getDocumentsByCategory("Maven")
  .subscribe((data:any) => {
    console.log(data);
    this.documents = data;
  });
}

deleteDocument(document : Document): void{
  console.log("Inside component "+ document);
  this.documentService.deleteDocument(document.documentName).subscribe();
}

searchDocument() : void{
  console.log("Inside component "+ this.documents);
  this.documentService
  .searchBookByBookName(this.searchText)
  .subscribe((data:any) => {
    console.log(data);
    this.documents = data;
  });
}

}
