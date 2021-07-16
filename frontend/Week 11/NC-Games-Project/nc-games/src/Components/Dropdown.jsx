import React, { useState } from "react";
import { getUsers } from "../Utils/api";
import { useEffect } from "react";

const Dropdown = () => {
  const [users, setUsers] = useState([]);
  const [dropDown, setDropDown] = useState(false);

  useEffect(() => {
    getUsers().then((users) => {
      setUsers(users);
    });
  }, []);

  console.log(dropDown);

  return (
    <div class="login">
      <button
        onClick={() => {
          setDropDown(true);
        }}
      >
        Select your login
      </button>
      {dropDown ? (
        <div>
          {users.map((user) => {
            return (
              <ul key={user.username}>
                <button>{user.username}</button>
              </ul>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};

export default Dropdown;
