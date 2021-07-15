import React from "react";
import { Route, Switch } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Settings from "./components/Settings";
import Profile from "./components/Profile";

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/landing" render={(props) => <LandingPage />} />
        <Route exact from="/" render={(props) => <Home />} />
        <Route exact from="/signup" render={(props) => <Signup />} />
        <Route exact from="/signin" render={(props) => <Signin />} />
        <Route exact path="/settings" render={(props) => <Settings />} />
        <Route exact path="/profile" render={(props) => <Profile />} />
      </Switch>
    </div>
  );
};

export default Routes;
