import { Component } from "react";
import AccountsList from "../parts/AccountsList";
import CategoriesList from "../parts/CategoriesList";
import Transactions from "../components/Transactions";
import ExpenseByCategory from "../components/ExpenseByCategory";
import MonthlyOverview from "../parts/MonthlyOverview";
import ExpensesOverviewWrapper from "../parts/ExpensesOverviewWrapper";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-3" style={{
              backgroundColor: "lightgray",
              padding: "50px 0 0 50px",
            }}>
            <div >
            {/* <AccountsList /> */}
            <CategoriesList />
            </div>
          </div>
          <div
            className="col-6"
            style={{
              backgroundColor: "white",
              minHeight: "100vh",
              padding: "50px 40px"
            }}
          >
            <Transactions />
          </div>
          <div
            className="col-3"
            style={{
              backgroundColor: "white",
              padding: "50px 50px 0 0"
            }}
          >
            <ExpensesOverviewWrapper/>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
