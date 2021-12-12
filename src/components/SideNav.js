import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { withRouter } from "react-router-dom";

import Routes from "../Routes";
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    backgroundColor: "white"
  },
  navColor: {
    color: "black",
  },
  navBorder: {
    borderRight: "2px solid black",
  },
}));

const SideNav = (props) => {
  console.log("props: ", props);
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const { history } = props;
  console.log("history: ", history);
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <MenuIcon onClick={open ? handleDrawerClose : handleDrawerOpen}>
            {theme.direction === "rtl" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </MenuIcon>
        </div>
        <Divider />
        <List>
          <ListItem
            button
            className={`py-4 mt-3 ${
              history.location.pathname === "/" ? clsx(classes.navBorder) : ""
            }`}
            onClick={() => history.push("/app")}
          >
            <ListItemIcon>
              <span
                className={`material-icons pl-2 ${
                  history.location.pathname === "/app"
                    ? clsx(classes.navColor)
                    : ""
                }`}
              >
                home
              </span>
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem
            button
            className={`py-4 ${
              history.location.pathname === "/stats"
                ? clsx(classes.navBorder)
                : ""
            }`}
            onClick={() => history.push("/stats")}
          >
            <ListItemIcon>
              <span
                className={`material-icons pl-2 ${
                  history.location.pathname === "/stats"
                    ? clsx(classes.navColor)
                    : ""
                }`}
              >
                analytics
              </span>
            </ListItemIcon>
            <ListItemText primary="Stats" />
          </ListItem>
          <ListItem
            button
            className={`py-4 ${
              history.location.pathname === "/settings"
                ? clsx(classes.navBorder)
                : ""
            }`}
            onClick={() => history.push("/settings")}
          >
            <ListItemIcon>
              <span
                class={`material-icons pl-2 ${
                  history.location.pathname === "/settings"
                    ? clsx(classes.navColor)
                    : ""
                }`}
              >
                settings
              </span>
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItem>
          <ListItem
            button
            className={`py-4 ${
              history.location.pathname === "/profile"
                ? clsx(classes.navBorder)
                : ""
            }`}
            onClick={() => history.push("/profile")}
          >
            <ListItemIcon>
              <span
                className={`material-icons pl-2 ${
                  history.location.pathname === "/profile"
                    ? clsx(classes.navColor)
                    : ""
                }`}
              >
                account_box
              </span>
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItem>
        </List>
      </Drawer>
      <main className={classes.content}>
        <Routes />
      </main>
    </div>
  );
};

export default withRouter(SideNav);
