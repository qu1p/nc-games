import React from "react";
import { useParams } from "react-router-dom";
import { getReviewByReview_Id } from "../Utils/api";
import { useState, useEffect, useContext } from "react";
import { LogonContext } from "../Contexts/Logon";
import IncrementCount from "../Components/IncrementCount";

const SingleReview = (props) => {
  console.log(props);
  const [review, setReview] = useState([]);
  const [currPage, setCurrPage] = useState("");
  // const [isLoading, setIsLoading] = (false)
  const { review_id, category } = useParams();
  const { logon, setLogon } = useContext(LogonContext);

  useEffect(() => {
    getReviewByReview_Id(review_id).then((review) => {
      console.log(review, "review");
      setReview(review);
    });
  }, []);

  return (
    <div>
      <ul>
        {review.map((review) => {
          return (
            <div key={review.review_id}>
              <h3>{review.title}</h3>
              <figure className="reviewbody">
                <p>{review.review_body}</p>
                {/* Back button not working on all reviews */}
                {/* <Link to={`/reviews/${review.category}`}>
                <button>Back</button>
                </Link> */}

                <IncrementCount
                  votes={review.votes}
                  username={review.owner}
                  review_id={review_id}
                  review={review}
                />
              </figure>
              <hr style={{ width: 800 }}></hr>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default SingleReview;
