import React from "react";
import PropTypes from "prop-types";
import LoginCreateUser from "./Login";
import { Link } from "react-router-dom";

const Header = ({ title, user, setUser }) => {
  return (
    <div>
      <h1>{title}</h1>
      <LoginCreateUser user={user} setUser={setUser}/>
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
