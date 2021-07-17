import React from "react";
import { useParams, Link } from "react-router-dom";
import { getReviewByReview_Id } from "../Utils/api";
import { useState, useEffect } from "react";



const SingleReview = (props) => {
  console.dir(props)
  const [review, setReview] = useState([]);
  const [currPage, setCurrPage] = useState("")
  const { review_id, category } = useParams();

  useEffect(() => {
    getReviewByReview_Id(review_id).then((review) => {
      setReview(review);
    });
  }, []);
  
 
  // function goBack{
  //   if(path===)
  // }

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
                <button>Like</button><p>{review.votes}</p> 
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
