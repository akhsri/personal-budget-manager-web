import React, { Component, Fragment } from "react";
import {
  BrowserRouter,
  Route,
  NavLink,
  HashRouter,
  Link,
} from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <Fragment>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <div style={{ marginLeft: "auto" }}>
            </div>
            <Link to="/signin">
              <Button color="inherit" className="btn">
                Signin
              </Button>
            </Link>
            <Link to="/signup">
              <Button color="inherit" className="btn">
                Signup
              </Button>
            </Link>
          </Toolbar>
        </AppBar>
      </div>

      <style>
        {`
              .btn{
                  color: white;
                  font-weight: bold;
              }
          `}
      </style>
    </Fragment>
  );
}
