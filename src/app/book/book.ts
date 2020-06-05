export class Book{
    bookId ?: string;
    bookName ?: string;
    bookDescription ?: string;
    rating ?: string;
    link ?: string;
    cost ?: string;
    author ?: string;
    bookImage ?: any;

    constructor(bookId? : string, bookName? : string, bookDescription? : string, rating? : string,
        link? : string, cost ?: string, author ?: string, bookImage ?: any){
        this.bookId = bookId;
        this.bookName = bookName;
        this.bookDescription = bookDescription;
        this.rating = rating;
        this.link = link;
        this.cost = cost;
        this.author = author;
        this.bookImage = bookImage;
    }
}