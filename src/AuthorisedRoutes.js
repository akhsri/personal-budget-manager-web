import React from "react";
import { Route, Switch } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import SideNav from "./components/SideNav";
import PrivateRoute from "./auth/helper/PrivateRoute";

const Routes = () => {
  return (
    <div>
      <Switch>
        <PrivateRoute path="/app" exact component={SideNav} />
      </Switch>
    </div>
  );
};

export default Routes;
