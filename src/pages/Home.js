import { Component } from "react";
import AccountsList from "../components/AccountsList";
import CategoriesList from "../components/CategoriesList";
import Transactions from "../components/Transactions";
import ExpenseByCategory from "../components/ExpenseByCategory";
import MonthlyOverview from "../parts/MonthlyOverview";

class Home extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-3">
          <AccountsList />
          <CategoriesList />
        </div>
        <div className="col-6">
          <Transactions />
        </div>
        <div className="col-3">
          <MonthlyOverview />
          <ExpenseByCategory />
        </div>
      </div>
    );
  }
}
export default Home;
