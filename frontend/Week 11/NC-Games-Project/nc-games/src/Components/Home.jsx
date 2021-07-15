import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getReviews } from "../Utils/api";

import React from "react";

const Home = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getReviews().then((reviews) => {
      setReviews(reviews);
    });
  }, []);
  return (
    <div>
      <h1>All Reviews</h1>
      <ul>
        {reviews.map((review) => {
          return (
            <div key={review.review_id}>
              <h3>Title: {review.title}</h3>
              <figure className="review">
                <img
                  src={review.review_img_url}
                  alt={review.owner}
                  className="image"
                ></img>
                <li>
                  <p>Owner: {review.owner}</p>
                  <p>Category: {review.category}</p>

                  <p>Created: {`2${review.created_at.substr(1, 9)}`}</p>
                  <p>Votes: {review.votes}</p>
                  <Link to={`/review/${review.review_id}`}>
                    <button>Read the review...</button>
                  </Link>
                </li>
              </figure>
              <hr style={{ width: 800 }}></hr>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Home;
