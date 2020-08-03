export class Queries{
    queryId ?: string;
    queryName ?: string;
    link ?: string;
    categoryName ?: any;
    count ?: number

    constructor(queryId? : string, queryName? : string, link? : string, categoryName ?: any, count ?: number){
        this.queryId = queryId;
        this.queryName = queryName;
        this.link = link;
        this.categoryName = categoryName;
        this.count = count;
    }
}