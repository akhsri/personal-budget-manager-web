import React, { Component } from "react";
import DatePicker from "./DatePicker"
import TransactionsList from "./TransactionsList";

import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add'

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
                <div className="row">
                    <span className="col-10">
                        <h3>Daily Transactions</h3>
                    </span>
                    <span className="col-2">
                        <Fab size="small" color="primary" aria-label="add">
                            <AddIcon />
                        </Fab>
                    </span>

                </div>
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