class Book {

    id : number;
    title: string;
    author?: string;
    descritption?: string
    copies?: number;
    copiesAvailable?: number;
    category?: string;
    img?: string;

    
    constructor(id : number, title: string, author?: string,  descritption?: string, copies?: number, copiesAvailable?: number,
         category?: string, img?: string) {
        this.id = id;
        this.title = title
        this.author = author;
        this.descritption = descritption;
        this.copies = copies;
        this.copiesAvailable = copiesAvailable;
        this.category = category;
        this.img = img;
    }
}

export default Book;