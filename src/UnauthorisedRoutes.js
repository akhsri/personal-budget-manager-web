import React from "react";
import { Route, Switch } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Navbar from "./components/Navbar";

const Routes = () => {
  const token = localStorage.getItem("token");
  const isUserLoggedIn = !!token;
  return (
    <div>
      {isUserLoggedIn ? null : <Navbar />}
      <Switch>
        <Route exact path="/" render={(props) => <Signin />} />
        <Route exact from="/signup" render={(props) => <Signup />} />
        <Route exact from="/signin" render={(props) => <Signin />} />
      </Switch>
    </div>
  );
};

export default Routes;
