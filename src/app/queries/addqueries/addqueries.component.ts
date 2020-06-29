import { Component, OnInit } from '@angular/core';
import { Queries } from '../queries';
import { QueriesService } from '../queries.service';
import { FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-addqueries',
  templateUrl: './addqueries.component.html',
  styleUrls: ['./addqueries.component.css']
})
export class AddqueriesComponent implements OnInit {

  private query = new Queries();

  private queries : Queries[] = [];

  constructor(private queriesService : QueriesService) { }

  showMsg: boolean = false;

  ngOnInit() {
  }

  addQuery() : void{
    console.log("Inside add query" + this.query);
    this.queriesService.addQueries(this.query)
      .subscribe(query => this.queries.push(query));
  }

  deleteQuery() : void{
    console.log("Inside delete query");
    this.queriesService.deleteQueries(this.query.queryName)
      .subscribe();
  }

}
