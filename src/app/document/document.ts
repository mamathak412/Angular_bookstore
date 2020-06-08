export class Document{
    documentId ?: string;
    documentName ?: string;
    link ?: string;
    categoryName ?: any

    constructor(documentId? : string, documentName? : string,
        link? : string, categoryName ?: any){
        this.documentId = documentId;
        this.documentName = documentName;
        this.link = link;
        this.categoryName = categoryName;
    }
}