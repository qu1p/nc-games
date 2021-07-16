import React from "react";
import PropTypes from "prop-types";
import Dropdown from "../Components/Dropdown"
import { Link } from "react-router-dom";

const Header = ({ title, user, setUser }) => {
  return (
    <div>
      <h1>{title}</h1>
      <Dropdown />
    </div>
  );
};

export default Header;

Header.defaultProps = {
  title: "Welcome to NC-Games Reviews",
};

Header.propTypes = {
  title: PropTypes.string,
};
