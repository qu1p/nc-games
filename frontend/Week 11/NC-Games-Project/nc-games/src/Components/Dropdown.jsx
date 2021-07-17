import React, { useState, useContext } from "react";
import { getUsers } from "../Utils/api";
import { useEffect } from "react";
import { Link, Route } from "react-router-dom";
import { CurrentUserContext } from "../Contexts/CurrentUser";

const Dropdown = () => {
  const [users, setUsers] = useState([]);
  const [dropDown, setDropDown] = useState(false);
  const [logon, setLogon] = useState(false);

  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);

  useEffect(() => {
    getUsers().then((users) => {
      setUsers(users);
    });
  }, []);

  function handleLogon(currentUser) {
    setDropDown(!dropDown);
    setLogon(!logon);
    setCurrentUser(currentUser);
  }

  if (!logon) {
    return (
      <div class="MainLoginButtons">
        <button
          class="loginButtons"
          onClick={() => {
            setDropDown(!dropDown);
          }}
        >
          Select your login
        </button>
        {dropDown ? (
          <ul>
            {users.map((user) => {
              return (
                <ul key={user.username}>
                  <button
                    class="loginButtons"
                    onClick={() => {
                      handleLogon(user.username);
                    }}
                  >
                    {user.username}
                  </button>
                </ul>
              );
            })}
          </ul>
        ) : null}
      </div>
    );
  } else {
    return (
      <div class="login">
        <h3>{`You are logged in as ${currentUser}`}</h3>
        <Link to={`/${currentUser}reviews`}>
          <button>Your reviews</button>
        </Link>
        <button
          onClick={() => {
            setLogon(false);
          }}
        >
          Logout
        </button>
      </div>
    );
  }
};

export default Dropdown;
