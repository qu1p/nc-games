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
    /*style={{marginLeft: '40%', marginTop: '60px', width: '30%'}}*/
    <span>
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
    </span>
  );
};

export default Categories;

//   useEffect(() => {
//     getUsers().then((usersFromApi) => {
// 	//     console.log(usersFromApi)
//       setUser(usersFromApi);
//     });
//   }, [user]);
