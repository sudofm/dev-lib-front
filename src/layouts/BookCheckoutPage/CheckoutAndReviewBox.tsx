import { Link } from "react-router-dom";
import Book from "../../models/Book";
import { LeaveReviewInput } from "../Utils/LeaveReviewInput";

export const CheckoutAndReviewBox: React.FC<{
  book: Book | undefined;
  mobile: boolean;
  currentLoansCount: number;
  isAuthenticated: any;
  isBookCheckedOut: boolean;
  checkoutBoook: any;
  isReviewLeft: boolean;
  submitReview: any;
}> = (props) => {
  const buttonRender = () => {
    /* console.log("isboookcheckout :", props.isBookCheckedOut);
        console.log("currentLoansCount :", props.currentLoansCount); */

    if (props.isAuthenticated) {
      if (!props.isBookCheckedOut && props.currentLoansCount < 5) {
        return (
          <button
            onClick={() => {
              props.checkoutBoook();
            }}
            className="btn btn-success btn-lg"
          >
            Emprunter
          </button>
        );
      } else if (props.isBookCheckedOut) {
        return (
          <p>
            <b>Livre emprunté. Prends en soin!</b>
          </p>
        );
      } else if (!props.isBookCheckedOut) {
        return <p className="text-danger">Trop de livres empruntés.</p>;
      }
    }
    return (
      <Link to={"/login"} className="btn btn-success btn-lg">
        S'inscrire
      </Link>
    );
  };

  const reviewRender = () => {
    console.log("props.isReviewLeft: ", props.isReviewLeft);

    if (props.isAuthenticated && !props.isReviewLeft) {
      return <LeaveReviewInput submitReview={props.submitReview} />;
    } else if (props.isAuthenticated && props.isReviewLeft) {
      return (
        <p>
          <b>Merci pour ton avis !</b>
        </p>
      );
    } else {
      <p>
        <b>Inscris toi pour laisser un avis</b>
      </p>;
    }
  };
  return (
    <div
      className={
        props.mobile ? "card d-flex mt-5" : "card col-3 container d-flex mb-5"
      }
    >
      <div className="card-body container">
        <div className="mt-3">
          <p>
            <b>{props.currentLoansCount}/5 </b> livres empruntés
          </p>
          <hr />
          {props.book &&
          props.book.copiesAvailable &&
          props.book.copiesAvailable > 0 ? (
            <h4 className="text-success">Disponible</h4>
          ) : (
            <h4 className="text-danger">Liste d'attente</h4>
          )}
          <div className="row">
            <p className="col-6 lead">
              <b>{props.book?.copies} </b>
              copies
            </p>
            <p className="col-6 lead">
              <b>{props.book?.copiesAvailable} </b>
              disponible
            </p>
          </div>
        </div>
        {buttonRender()}
        <hr />
        <p className="mt-3">
          Ce nombre peut varier jusqu'a la finalisation de la commande
        </p>
        {reviewRender()}
      </div>
    </div>
  );
};
