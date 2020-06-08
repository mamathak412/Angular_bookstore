import { Component, OnInit } from '@angular/core';
import { DocumentService } from '../document.service';
import { Document } from '../document';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-linux',
  templateUrl: './linux.component.html',
  styleUrls: ['./linux.component.css']
})
export class LinuxDocComponent implements OnInit {

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
  .getDocumentsByCategory("Linux")
  .subscribe((data:any) => {
    console.log(data);
    this.documents = data;
  });
}
}
