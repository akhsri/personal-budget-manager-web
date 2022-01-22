import React, { Fragment, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@mui/material/Paper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import { connect } from "react-redux";
import * as TransactionActions from "../actions/transactionsAction";
import moment from 'moment';

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
  const [transactionsList, setTransactionsList] = useState([]);
 
  const { moneyTransactionList, getMoneyTransactions } = props;
  
  
  useEffect(() => {
    
    getMoneyTransactions();
  }, [])
  return (
    <div className={classes.root} style={{ minHeight: "100%" }}>
      <div className={classes.demo} style={{ minHeight: "100%" }}>
          <List dense={dense} sx={{ minHeight: "100%" }}>
            {moneyTransactionList && moneyTransactionList.length > 0 ? (
              moneyTransactionList.map((transaction) => {
                console.log("transaction: ", transaction)
                let name = transaction.moneyTransactionType === "EXPENSE"
                ? transaction.payee
                : transaction.payer
                let date = moment(transaction.occuredAt).format("dddd, MMMM Do YYYY, h:mm:ss a")
                return (
                  <Fragment key={transaction.id}>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          {`${name[0]}`}
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={
                          name
                        }
                        secondary={secondary ? date : null}
                      />
                      <ListItemSecondaryAction>
                        <p className={`font-weight-bold ${transaction.moneyTransactionType == "EXPENSE" ? "text-danger" : "text-success"}`} >{`$${transaction.amount}`}</p>
                      </ListItemSecondaryAction>
                    </ListItem>
                    <Divider variant="inset" component="li" />
                  </Fragment>
                );
              })
            ) : (
              <h6 className="text-center mt-5">You don't have any transactions</h6>
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
