import { Link } from "react-router-dom";
import { Review } from "../Utils/Review";
import ReviewModel from "../../models/ReviewModel";



export const LatestReviews : React.FC<{
  reviews: ReviewModel[],
  bookId: number | undefined,
  mobile: boolean
}> = (props) => {
  console.log("vvvv", props.bookId)
  return (
    <div className={props.mobile ? "mt-3" : "row mt-5"}>
      <div className={props.mobile ? "" : "col-sm-2 col-md-2"}>
        <h2>Derniers Avis</h2>
      </div>
      <div className="col-sm-10 col-md-10">
        {props.reviews.length > 0 ? (
          <>
            {props.reviews.slice(0, 3).map((eachReview) => (
              <Review review={eachReview} key={eachReview.id} />
            ))}

            <div className="m-3">
              <Link
                type="button"
                className="btn main-color btn-md text-white"
                to={`/reviewlist/${props.bookId}`}
              >
                Voir tous les avis
              </Link>
            </div>
          </>
        ) : (
          <div className="m-3">
            <p className="lead">
              Il n'y a actuellement aucun avis pour ce livre.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
