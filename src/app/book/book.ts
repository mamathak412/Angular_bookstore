export class Book{
    objectId ?: any;
    bookName ?: string;
    bookDescription ?: string;
    rating ?: string;
    link ?: string;
    cost ?: string;
    author ?: string;
    bookImage ?: any;
    categoryName ?: any
    count ?: number

    constructor(objectId? : string, bookName? : string, bookDescription? : string, rating? : string,
        link? : string, cost ?: string, author ?: string, bookImage ?: any, categoryName ?: any, count ?: number){
        this.objectId = objectId;
        this.bookName = bookName;
        this.bookDescription = bookDescription;
        this.rating = rating;
        this.link = link;
        this.cost = cost;
        this.author = author;
        this.bookImage = bookImage;
        this.categoryName = categoryName;
        this.count = count;
    }
}