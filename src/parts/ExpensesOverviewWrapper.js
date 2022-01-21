import React, { Component, useEffect, useState } from "react";
import ExpenseByCategory from "../components/ExpenseByCategory";
import MonthlyOverview from "./MonthlyOverview";
import * as TransactionActions from "../actions/transactionsAction";
import { connect } from "react-redux";

const ExpensesOverviewWrapper = (props) => {
  const { fetchMonthlyOverview, monthlyOverview, moneyTransactionList } = props;
  const [monthlyExpensesOverview, setMonthlyExpensesOverview] = useState({
    expensesByCategory: [],
    totalMonthlyExpense: 0,
    totalMonthlyIncome: 0,
  });
  useEffect(() => {
    props.fetchMonthlyOverview();
    if (monthlyOverview) {
      setMonthlyExpensesOverview({
        expensesByCategory: monthlyOverview.expensesByCategory,
        totalMonthlyExpense: monthlyOverview.totalMonthlyExpense,
        totalMonthlyIncome: monthlyOverview.totalMonthlyIncome,
      });
    }
  }, [
    monthlyExpensesOverview.expensesByCategory.length,
    monthlyExpensesOverview.totalMonthlyExpense,
    monthlyExpensesOverview.totalMonthlyIncome,
    moneyTransactionList
  ]);

  return (
    <div>
      <MonthlyOverview monthlyOverview={monthlyExpensesOverview} />
      <ExpenseByCategory monthlyOverview={monthlyExpensesOverview} />
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
