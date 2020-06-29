import { Component, OnInit } from '@angular/core';
import { QueriesService } from '../queries.service';
import { Queries } from '../queries';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-othersqueries',
  templateUrl: './othersqueries.component.html',
  styleUrls: ['./othersqueries.component.css']
})
export class OthersqueriesComponent implements OnInit {

  private queries : Queries[] = [];

  selectedQuery : Queries;

  searchText: string;

  // Pagination parameters.
  p: Number = 1;
  count: Number = 5;


  constructor(private http: HttpClient, private queriesService: QueriesService) { }

  ngOnInit() {
    this.getQueries();
}

onSelect(query : Queries): void{
  console.log(query);
  this.selectedQuery = query;
}

getQueries() : void {
  console.log("Inside component "+ this.queries);
  this.queriesService
  .getQueriesByCategory("Aws")
  .subscribe((data:any) => {
    console.log(data);
    this.queries = data;
  });
}

deleteQuery(query : Queries): void{
  console.log("Inside component "+ query);
  this.queriesService.deleteQueries(query.queryName).subscribe();
}

searchQuery() : void{
  console.log("Inside component "+ this.queries);
  this.queriesService
  .searchBookByBookName(this.searchText)
  .subscribe((data:any) => {
    console.log(data);
    this.queries = data;
  });
}

}
