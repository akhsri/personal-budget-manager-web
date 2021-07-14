import React, { Component } from "react";

class ExpenseByCategory extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <h5 className='my-3'>Expenses By Category</h5>
                <div className="card mb-3">
                    <span className="pl-5">
                        <p className="mb-1">Food & Beverage</p>
                        <h6>$120.43</h6>
                    </span>
                </div>
                <div className="card mb-3">
                    <span className="pl-5">
                        <p className="mb-1">Food & Beverage</p>
                        <h6>$120.43</h6>
                    </span>
                </div>
                <div className="card mb-3">
                    <span className="pl-5">
                        <p className="mb-1">Food & Beverage</p>
                        <h6>$120.43</h6>
                    </span>
                </div>
            </div>
        );
    }
}
export default ExpenseByCategory