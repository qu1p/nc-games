import React, { useState } from "react";
import { getUsers } from "../Utils/api";
import { useEffect } from "react";

const Dropdown = () => {
  const [users, setUsers] = useState([]);
  const [dropDown, setDropDown] = useState(false);
  const [logon, setLogon] = useState(false);

  useEffect(() => {
    getUsers().then((users) => {
      setUsers(users);
    });
  }, []);

  function manageLogon() {
    setDropDown(!dropDown);
    setLogon(!logon)
//     return <p>Logged on as ....</p>;
  }

  
//   {!logon ? 

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
                <button onClick={manageLogon}>{user.username}</button>
              </ul>
            );
          })}
        </div>
      ) : null}
    </div>
  )  

	
};

export default Dropdown;
