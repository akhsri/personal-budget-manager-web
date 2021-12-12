import { Component } from "react";
import AccountsList from "../parts/AccountsList";
import CategoriesList from "../parts/CategoriesList";
import Transactions from "../components/Transactions";
import ExpenseByCategory from "../components/ExpenseByCategory";
import MonthlyOverview from "../parts/MonthlyOverview";

class Home extends Component {
  render() {
    return (
      <div className="p-5">
        <div className="row">
          <div className="col-3">
            <AccountsList />
            <CategoriesList />
          </div>
          <div
            className="col-6"
            style={{
              backgroundColor: "white",
              minHeight: "100vh",
            }}
          >
            <Transactions />
          </div>
          <div
            className="col-3"
            style={{
              backgroundColor: "white",
            }}
          >
            <MonthlyOverview />
            <ExpenseByCategory />
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
