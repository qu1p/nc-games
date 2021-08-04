import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getReviewByReview_Id } from "../Utils/api";
import ReviewsForUser, { review } from "../Components/ReviewsForUser";
import DeleteComment from "./DeleteComment";

const CommentsForUser = (review_id) => {
	console.log(review_id,"rev")

  const [review, setReview] = useState([]);
  useEffect(() => {
    getReviewByReview_Id(review_id.review_id).then((review) => {
      setReview(review);
    });
  }, []);

  return (
    <div>
      <ul>
        {review.map((review) => {
          return (
            <div key={review.review_id}>
              <figure className="reviewbody">
                <p>{review.review_body}</p>
                <DeleteComment review_body={review.review_body} review_id={review.review_id} review={review} />
              </figure>
              <hr style={{ width: 800 }}></hr>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default CommentsForUser;
