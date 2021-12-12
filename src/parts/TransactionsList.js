import React, { Fragment, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@mui/material/Paper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import FolderIcon from "@material-ui/icons/Folder";
import Divider from "@material-ui/core/Divider";
import DeleteIcon from "@material-ui/icons/Delete";
import { connect } from "react-redux";
import * as TransactionActions from "../actions/transactionsAction";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}));

function generate(element) {
  return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((value) =>
    React.cloneElement(element, {
      key: value,
    })
  );
}

const TransactionsList = (props) => {
  const classes = useStyles();
  const [dense, setDense] = useState(false);
  const [secondary, setSecondary] = useState(true);

  const { moneyTransactionList, getMoneyTransactions } = props;

  useEffect(() => {
    getMoneyTransactions();
  }, [moneyTransactionList]);
  return (
    <div className={classes.root} style={{ minHeight: "100%" }}>
      <div className={classes.demo} style={{ minHeight: "100%" }}>
          <List dense={dense} sx={{ minHeight: "100%" }}>
            {moneyTransactionList ? (
              moneyTransactionList.map((transaction) => {
                return (
                  <Fragment>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <FolderIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={
                          transaction.moneyTransactionType === "EXPENSE"
                            ? transaction.payee
                            : transaction.payer
                        }
                        secondary={secondary ? "1 Dec 2020 11:36 AM" : null}
                      />
                      <ListItemSecondaryAction>
                        <ListItemText primary="$23.4" />
                      </ListItemSecondaryAction>
                    </ListItem>
                    <Divider variant="inset" component="li" />
                  </Fragment>
                );
              })
            ) : (
              <h3>You don't have any transactions</h3>
            )}
          </List>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    moneyTransactionList: state.transactions.moneyTransactionList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getMoneyTransactions: () => {
      dispatch(TransactionActions.getMoneyTransactions());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TransactionsList);
