import React from "react";
import { useState } from "react";
import axios from "axios";

const CreateAccount = () => {
  const [newUser, setNewUser] = useState({});

  function handleSubmit(event) {
    event.preventDefault();

    const element = document.querySelector("#post-request .user-id");
    const user = { username: "Test_User" };
    axios
      .post("https://ncgames-app.herokuapp.com/api/users", user)
      .then((response)=> {
	      console.log(response, "<<< response")
	// (element.innerHTML = response.data.id)
      });
  }

  function handleChangeEvent(event) {
    setNewUser(event.target.value);
    console.log(newUser, "<< newUser");
  }

  return (
    <div>
      <h2>Create New Account</h2>
      <form onSubmit={handleSubmit}>
        <label>Enter a Username</label>
        <input onChange={handleChangeEvent}></input>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default CreateAccount;
