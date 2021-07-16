import React, { useState } from "react";
import { getUsers } from "../Utils/api";
import { useEffect } from "react";

const Dropdown = () => {
  const [users, setUsers] = useState([]);
  const [dropDown, setDropDown] = useState(false);
  const [logon, setLogon] = useState(false);
  const [currentUser, setCurrentUser] = useState()

  useEffect(() => {
    getUsers().then((users) => {
      setUsers(users);
    });
  }, []);

  function manageLogon(currentUser) {
    setDropDown(!dropDown);
    setLogon(!logon);
    setCurrentUser(currentUser)
    //     return <p>Logged on as ....</p>;
  }

  if (!logon) {
    return (
      <div class="login">
        <button
          onClick={() => {
            setDropDown(!dropDown);
          }}
        >
          Select your login
        </button>
        {dropDown ? (
          <div>
            {users.map((user) => {
              return (
                <ul key={user.username}>
                  <button onClick={() => {manageLogon(user.username)}}>{user.username}</button>
                </ul>
              );
            })}
          </div>
        ) : null}
      </div>
    );
  } else {
    return (
      <div class="login">
        <h3>{`You are logged in as ${currentUser}`}</h3>
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
