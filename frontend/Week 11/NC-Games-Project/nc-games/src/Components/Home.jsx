import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getReviews } from "../Utils/api";

import React from "react";

const Home = () => {
  const [reviews, setReviews] = useState([]);

  const [sortType ] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getReviews().then((reviews) => {
      setReviews(reviews);
    });
  }, [sortType]);

  function sortBy(sortCriteria) {
    reviews.sort(function (a, b) {
      return a[sortCriteria] - b[sortCriteria];
    });
  }

  return (
    <div>
      <h1>All Reviews</h1>
      <div class="sortBy-dropdown">
        <button class="sortBy-dropbtn">Sort By</button>

        <div class="sortBy-dropdown-content">
          <a
            onClick={() => {
              sortBy("created_at");
            }}
            href=""
          >
            Date Created
          </a>
          <a value="votes" href="">
            Votes
          </a>
          <a
            onClick={() => {
              sortBy("comment_count");
            }}
            href=""
          >
            Comments
          </a>
        </div>
      </div>

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
                    <button className="review-button">
                      Read the review +
                    </button>
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
