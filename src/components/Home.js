import { Component } from "react";
import AccountsList from "./AccountsList";
import CategoriesList from "./CategoriesList";
import Transactions from "./Transactions";
import ExpenseByCategory from "./ExpenseByCategory";

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
                    <ExpenseByCategory />
                </div>
            </div>
        )
    }
}
export default Home;