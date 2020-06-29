export class Queries{
    queryId ?: string;
    queryName ?: string;
    link ?: string;
    categoryName ?: any

    constructor(queryId? : string, queryName? : string, link? : string, categoryName ?: any){
        this.queryId = queryId;
        this.queryName = queryName;
        this.link = link;
        this.categoryName = categoryName;
    }
}