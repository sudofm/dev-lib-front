class ReviewModel {

    id: number;
    userEmail: string;
    date: string;
    rating: number;
    bookId: number;
    reviewDescription: number;

    constructor(id: number, userEmail: string, date: string, rating: number, bookId: number, reviewDescription: number) {
        this.id = id;
        this.userEmail = userEmail;
        this.date = date;
        this.rating = rating;
        this.bookId = bookId;
        this.reviewDescription = reviewDescription; 
    }

}
export default ReviewModel;