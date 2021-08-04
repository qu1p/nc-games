import React, { useState, useContext } from "react";
import { getUsers } from "../Utils/api";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { CurrentUserContext } from "../Contexts/CurrentUser";
import { LogonContext } from "../Contexts/Logon";

const Dropdown = () => {
  const [users, setUsers] = useState([]);
  //   const [dropDown, setDropDown] = useState(false);
  // const [logon, setLogon] = useState(false);

  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const { logon, setLogon } = useContext(LogonContext);
  useEffect(() => {
    getUsers().then((users) => {
      setUsers(users);
    });
  }, []);

  function handleLogon(currentUser) {
    // setDropDown(!dropDown);
    setLogon(!logon);
    setCurrentUser(currentUser);
  }

  if (!logon) {
    return (
      <div>
        <div class="login-dropdown">
          <button class="login-dropbtn">Choose Login</button>
          <div class="login-dropdown-content">
            {users.map((user) => {
              return (
                <div key={user.username}>
                  <a
                    onClick={() => {
                      handleLogon(user.username);
                    }}
                    href="#"
                  >
                    {user.username}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div class="login">
        <h3>{`Logged in as ${currentUser}`}</h3>
        <Link to={`/${currentUser}reviews`}>
          <button>Your reviews</button>
        </Link>
        <Link to={"/reviews"}>
          <button
            onClick={() => {
              setLogon(false);
            }}
          >
            Logout
          </button>
        </Link>
      </div>
    );
  }
};

export default Dropdown;
