export const API = {
  BASE_PATH: process.env.REACT_APP_BASE_API_URL,
  USER_SIGNIN: "/auth/signin",
  USER_SIGNUP: "/auth/signup",
  CREATE_BANK_ACCOUNT: "/bank-accounts/create",
  GET_BANK_ACCOUNTS: "/bank-accounts",
  CREATE_CATEGORY: "/category/create",
  GET_CATEGORIES: "/category",
  CREATE_BUDGET: "/budget/create",
  GET_BUDGETS: "/budget",
  CREATE_MONEY_TRANSACTION: "/money-transaction/create",
  GET_MONEY_TRANSACTION_LIST: "/money-transaction",
  GET_MONTHLY_OVERVIEW: "/money-transaction/monthly-overview"

};

export const ACTION_TYPES = {
  UPDATE_SIGNUP_STATUS: "UPDATE_SIGNUP_STATUS",
  UPDATE_AUTH_STATUS: "UPDATE_AUTH_STATUS",
  AUTH_API_ERROR: "AUTH_API_ERROR",
  ADD_BANK_ACCOUNT: "ADD_BANK_ACCOUNT",
  GET_BANK_ACCOUNTS_LIST: "GET_BANK_ACCOUNTS_LIST",
  UPDATE_BANK_ACCOUNTS_LIST: "UPDATE_BANK_ACCOUNTS_LIST",
  ADD_CATEGORY: "ADD_CATEGORY",
  GET_CATEGORIES_LIST: "GET_CATEGORIES_LIST",
  UPDATE_CATEGORIES_LIST: "UPDATE_CATEGORIES_LIST",
  ADD_BUDGET: "ADD_BUDGET",
  GET_BUDGET_LIST: "GET_BUDGET_LIST",
  UPDATE_BUDGET_LIST: "UPDATE_BUDGET_LIST",
  ADD_MONEY_TRANSACTION: "ADD_MONEY_TRANSACTION",
  GET_MONEY_TRANSACTION_LIST: "GET_MONEY_TRANSACTION_LIST",
  UPDATE_MONEY_TRANSACTION_LIST: "UPDATE_MONEY_TRANSACTION_LIST",
  GET_MONTHLY_OVERVIEW: "GET_MONTHLY_OVERVIEW"
};
