import React from "react";
import Book from "../../../models/Book";
import { Link } from "react-router-dom";

export const ReturnBook:  React.FC<{book: Book}> = (props) => {
  return (
    <div className="col-xs-6 col-sm-6 col-md-4 col-lg-3 mb-3">
      <div className="text-center">
        {props.book.img ? 
          <img
            src={props.book.img}
            width="151"
            height="233"
            alt="Book"
          /> :
          <img
            src={require("./../../../Images/BooksImages/book-luv2code-1000.png")}
            width="151"
            height="233"
            alt="Book"
         />
        }

        <h6 className="mt-2">{props.book.title}</h6>
        <p>{props.book.author}</p>
        <Link type="button" className="btn main-color text-white" to={`/checkout/${props.book.id}`}>
         Reserver
        </Link>
       
      </div>
    </div>
  );
}