import React from "react";
import { useState, useContext, useEffect } from "react";
import { getCategories } from "../Utils/api";
import { Link } from "react-router-dom";
import Box from "@material-ui/core/Box";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((categoriesFromApi) => {
      setCategories(categoriesFromApi);
    });
  }, []);

  return (
    <div>
      <ul class="categoriesButtons">
        {categories.map((category) => {
          return (
            <ul key={category.slug}>
              <Link to={`/reviews/${category.slug}`}>
                <button class="button">{category.slug}</button>
              </Link>
            </ul>
          );
        })}
        <Link to={`/reviews`}>
          <button class="button">All Reviews</button>
        </Link>
      </ul>
    </div>
  );
};

export default Categories;

