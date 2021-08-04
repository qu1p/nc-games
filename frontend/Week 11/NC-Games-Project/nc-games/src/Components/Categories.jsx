import React from "react";
import { useState, useEffect } from "react";
import { getCategories } from "../Utils/api";
import { Link } from "react-router-dom";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((categoriesFromApi) => {
      setCategories(categoriesFromApi);
    });
  }, []);

  return (
    <div>
      <div class="dropdown">
        <button class="dropbtn">Game Category</button>
        <div class="dropdown-content">
          {categories.map((category) => {
            return (
              <div key={category.slug}>
                <Link to={`/reviews/${category.slug}`}>
                  <a>{category.slug}</a>
                </Link>
              </div>
            );
          })}
          <Link to={`/reviews`}>
            <a>All</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Categories;
