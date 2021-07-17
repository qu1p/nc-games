import "./App.css";
import { useState, useEffect } from "react";
import React from "react";
import { CurrentUserContext } from "./Contexts/CurrentUser";
import { LogonContext } from "./Contexts/Logon";

import Header from "./Components/Header";
import Categories from "./Components/Categories";
import Home from "./Components/Home";
import GamesForCategory from "./Components/ReviewsByCategory";
import CreateAccount from "./Components/CreateAccount";
import SingleReview from "./Components/SingleReview";
import ReviewsForUser from "./Components/ReviewsForUser";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const defaultUser = { username: "Please login" };
  const [user, setUser] = useState(defaultUser);
  const [currentUser, setCurrentUser] = useState({});
  const [logon, setLogon] = useState(false);

  return (
    <Router>
      <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
        <LogonContext.Provider value={{ logon, setLogon }}>
          <div className="App">
            <header className="App-header">
              <Header user={user} setUser={setUser} />

              <Categories />
              <Switch>
                <Route exact path="/reviews">
                  <Home />
                </Route>
                <Route exact path="/:usernamereviews">
                  <ReviewsForUser />
                </Route>
                <Route exact path="/reviews/:category">
                  <GamesForCategory />
                </Route>
                <Route exact path="/review/:review_id">
                  <SingleReview />
                </Route>
                <Route exact path="/NewAccount">
                  <CreateAccount />
                </Route>
              </Switch>
            </header>
          </div>
        </LogonContext.Provider>
      </CurrentUserContext.Provider>
    </Router>
  );
}

export default App;
