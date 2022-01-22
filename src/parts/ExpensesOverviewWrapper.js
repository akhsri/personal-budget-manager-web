import React, { Component, useEffect, useState } from "react";
import ExpenseByCategory from "../components/ExpenseByCategory";
import MonthlyOverview from "./MonthlyOverview";
import * as TransactionActions from "../actions/transactionsAction";
import { connect } from "react-redux";

const ExpensesOverviewWrapper = (props) => {
  const { fetchMonthlyOverview, monthlyOverview, moneyTransactionList } = props;
 
  useEffect(() => {
    fetchMonthlyOverview();
  }, [moneyTransactionList]);

  console.log("monthlyOverview: ", monthlyOverview);

  return (
    <div>
      <MonthlyOverview monthlyOverview={monthlyOverview} />
      <ExpenseByCategory monthlyOverview={monthlyOverview} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    monthlyOverview: state.transactions.monthlyOverview,
    moneyTransactionList: state.transactions.moneyTransactionList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMonthlyOverview: () =>
      dispatch(TransactionActions.fetchMonthlyOverview()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExpensesOverviewWrapper);
