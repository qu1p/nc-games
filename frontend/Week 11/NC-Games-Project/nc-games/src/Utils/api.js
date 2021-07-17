import axios from "axios";

const gamesApi = axios.create({
  baseURL: "https://ncgames-app.herokuapp.com/api",
});

export const getCategories = async (category) => {
  let path = "/categories";

  const { data } = await gamesApi.get(path);
  return data.categories;
};

export const getUsers = async () => {
  const { data } = await gamesApi.get(`/users`);
  return data.users;
};

export const getReviews = async (category) => {
  let path = "/reviews";
  if (category) path += `?category_slug=${category}`;

  const { data } = await gamesApi.get(path);
  return data.reviews;
};

export const getReviewByReview_Id = async (review_id) => {
  let path = `/reviews/${review_id}`;

  const { data } = await gamesApi.get(path);
  return data.review;
};

export const getReviewsByUsername = async(username) => [
  
]