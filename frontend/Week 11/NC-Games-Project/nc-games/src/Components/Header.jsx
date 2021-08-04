import React from "react";
import PropTypes from "prop-types";
import Dropdown from "../Components/Dropdown";

const Header = ({ title, user, setUser, currentUser, setCurrentUser }) => {
  return (
    <div>
      <h1
        className="title"
        style={{
          font: "900 40px/1 'Source Sans Pro', Arial, sans-serif",
        }}
      >
        {title}
      </h1>
      <Dropdown currentUser={currentUser} setCurrentUser={setCurrentUser} />
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
