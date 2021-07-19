import React from "react";
import { useState, useEffect } from "react";
import { getReviews, getReviewByReview_Id } from "../Utils/api";
import { useContext } from "react";
import { CurrentUserContext } from "../Contexts/CurrentUser";
import { LogonContext } from "../Contexts/Logon";

const ReviewsForUser = () => {
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const { logon, setLogon } = useContext(LogonContext);

  const [reviews, setReviews] = useState([]);
  // console.log(currentUser.username)
  useEffect(() => {
    getReviews().then((reviews) => {
      const filteredByCurrentUser = reviews.filter((review) => {
        return review.owner === currentUser;
      });
      setReviews(filteredByCurrentUser);
    });
  }, []);



  console.log(logon);
  if (!logon) {
    return (
      <div>
        {`${currentUser} reviews`}
        <ul>
          {reviews.map((review) => {
            return (
              <div key={review.review_id}>
                <h3>{review.title}</h3>
		<p>{review.review_body}</p>
                <p>likes</p>
              </div>
            );
          })}
        </ul>
      </div>
    );
  } else {return null}
};

export default ReviewsForUser;
