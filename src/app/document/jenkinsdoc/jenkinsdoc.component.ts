import { Component, OnInit } from '@angular/core';
import { DocumentService } from '../document.service';
import { Document } from '../document';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-jenkinsdoc',
  templateUrl: './jenkinsdoc.component.html',
  styleUrls: ['./jenkinsdoc.component.css']
})
export class JenkinsDocComponent implements OnInit {

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
  .getDocumentsByCategory("Jenkins")
  .subscribe((data:any) => {
    console.log(data);
    this.documents = data;
  });
}

}
