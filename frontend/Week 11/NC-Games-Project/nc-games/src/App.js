import "./App.css";
import { useState, useEffect } from "react";
import React from "react";

import Header from "./Components/Header";
import Login from "./Components/Login";
import Categories from "./Components/Categories";
import Home from "./Components/Home";
import GamesForCategory from "./Components/ReviewsByCategory";
import CreateAccount from "./Components/CreateAccount";
import SingleReview from "./Components/SingleReview"
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";

function App() {
  const defaultUser = { username: "Please login" };
  const [user, setUser] = useState(defaultUser);

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Header user={user} setUser={setUser} />

          <Categories />
          <Switch>
            <Route exact path="/reviews">
              <Home />
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
    </Router>
  );
}

export default App;
