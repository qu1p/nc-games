import React from "react";
import { useState, useEffect } from "react";
import { getReviews, getReviewByReview_Id } from "../Utils/api";
import { useContext } from "react";
import { CurrentUserContext } from "../Contexts/CurrentUser";
import { LogonContext } from "../Contexts/Logon";
import AddComment from "../Components/AddComment";

import { SingleReviewContext } from "../Contexts/SingleReview";
import CommentsForUser from "./CommentsForUser";

const ReviewsForUser = (props) => {
  const { currentUser } = useContext(CurrentUserContext);
  const { logon } = useContext(LogonContext);
  const { singleReview } = useContext(SingleReviewContext);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getReviews().then((reviews) => {
      console.log(reviews, "reviews");
      const filteredByCurrentUser = reviews.filter((review) => {
        return review.owner === currentUser;
      });
      setReviews(filteredByCurrentUser);
    });
  }, []);

  // const filteredReviews = reviews.map((review) => {
  //   getReviewByReview_Id(review.review_id).then((review) => {
  //     setReviews(review);
  //   });
  //     return filteredReviews
  // });

  if (logon) {
    return (
      <div>
        {`${currentUser} reviews`}
        <ul>
          {reviews.map((review) => {
            return (
              <div key={review.review_id}>
                <h3>{review.title}</h3>
                <p>{review.review_body}</p>
                <CommentsForUser review_id={review.review_id}/>
                
              </div>
            );
          })}
        </ul>
        <AddComment currentUser={currentUser} />
      </div>
    );
  } else {
    return null;
  }
};

export default ReviewsForUser;
