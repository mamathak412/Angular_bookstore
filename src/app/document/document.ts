export class Document{
    documentId ?: string;
    documentName ?: string;
    link ?: string;
    categoryName ?: any
    count ?: number

    constructor(documentId? : string, documentName? : string, link? : string, categoryName ?: any, count ?: number){
        this.documentId = documentId;
        this.documentName = documentName;
        this.link = link;
        this.categoryName = categoryName;
        this.count = count;
    }
}