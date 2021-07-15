import React from "react";
import { useParams } from "react-router-dom";
import { getReviewByReview_Id } from "../Utils/api";
import { useState, useEffect } from "react";

const SingleReview = () => {
  const [review, setReview] = useState([]);
  const { review_id } = useParams();

  useEffect(() => {
    getReviewByReview_Id(review_id).then((review) => {
        setReview(review)
    });
  },[]);
console.log(review, "<<< review")



  return (
    <div>
      <ul>
        {review.map((review) => {
          return (
            <div key={review.review_id}>
              <h3>{review.title}</h3>
              <figure className="reviewbody">
                <p>{review.review_body}</p>
                <button>Back</button>
              </figure>
              <hr style={{ width: 800 }}></hr>
            </div>
          )
        })}
      </ul>
    </div>
  );
};

export default SingleReview;
