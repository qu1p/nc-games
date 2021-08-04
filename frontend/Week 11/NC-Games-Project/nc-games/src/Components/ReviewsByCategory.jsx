import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getReviews } from "../Utils/api";

import React from "react";

const GamesForCategory = () => {
  const [reviews, setReviews] = useState([]);
  const { category } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getReviews(category).then((reviews) => {
      const filteredByCategory = reviews.filter((review) => {
        return review.category === category;
      });
      setReviews(filteredByCategory);
      setLoading(false);
    });
  }, [category]);

  function sortBy(sortCriteria) {
    reviews.sort(function (a, b) {
      return a[sortCriteria] - b[sortCriteria];
    });
  }
  if (loading === true) {
    return <h1>"Page Loading"</h1>;
  }
  return (
    <div>
      <h1>{category.toUpperCase()} Games</h1>
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
          <a
            onClick={() => {
              sortBy("votes");
            }}
            href=""
          >
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
          console.log(review, "review");
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
                  <p>Comment: {review.comments}</p>
                  <Link to={`/review/${review.review_id}`}>
                    <button className="review-button">
                      Read the review...
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

export default GamesForCategory;
