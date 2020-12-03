import React, { Component } from "react";
import DatePicker from "./DatePicker"
import TransactionsList from "./TransactionsList";

class Transactions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: new Date(),
        }
    }

    handleDate = (date) => {
        this.setState({ startDate: date })
    }
    render() {
        return (
            <div>
                <span>
                    <h3>Daily Transactions</h3>
                </span>
                <div>
                    <input style={{ width: "100%" }} placeholder="Search" />
                </div>
                <div>
                    <DatePicker />
                </div>
                <div>
                    <TransactionsList />
                </div>
            </div>
        );
    }
}
export default Transactions