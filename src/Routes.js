import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from "./components/Home";
import Settings from "./components/Settings";
import Profile from "./components/Profile"

const Routes = () => {
    return (
        <div>
            <Switch>
                <Route exact from="/" render={props => <Home />} />
                <Route exact path="/settings" render={props => <Settings />} />
                <Route exact path="/profile" render={props => <Profile />} />
            </Switch>
        </div>
    )
}

export default Routes