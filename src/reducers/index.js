import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import { reducer as formReducer } from "redux-form";
import { reducer as toastrReducer } from "react-redux-toastr";
import signupReducer from "./signupReducer";
import signinReducer from "./signinReducer";
import bankAccountsReducer from "./bankAccountsReducer";
import categoriesReducer from "./categoriesReducer";
import budgetReducer from "./budgetReducer";
import transactionsReducer from "./transactionsReducer";

export default combineReducers({
  userSignup: signupReducer,
  userSignin: signinReducer,
  bankAccounts: bankAccountsReducer,
  categories: categoriesReducer,
  budgets: budgetReducer,
  transactions:transactionsReducer
});
