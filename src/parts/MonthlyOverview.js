import React, { Component, Fragment } from "react";
import { Bar } from "react-chartjs-2";

import CreateBudgetModal from "./CreateBudgetModal";
import * as TransactionActions from "../actions/transactionsAction";
import { connect } from "react-redux";

class MonthlyOverview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCreateBudgetModalOpen: false,
      monthlyOverview: props.monthlyOverview
    };
  }

  // shouldComponentUpdate(nextProps, nextState){
  //   return this.props.monthlyOverview == nextProps.monthlyOverview
  // }


  handleCreateBudgetModal = () => {
    this.setState({
      isCreateBudgetModalOpen: !this.state.isCreateBudgetModalOpen,
    });
  };

  render() {
    const { monthlyOverview } = this.props;
    let totalMonthlyExpense, totalMonthlyIncome;
    if(monthlyOverview){
      totalMonthlyExpense = monthlyOverview.totalMonthlyExpense;
      totalMonthlyIncome = monthlyOverview.totalMonthlyIncome;
    }


     const netIE = Math.abs(totalMonthlyExpense - totalMonthlyIncome);
    const data = {
      datasets: [
        {
          barPercentage: 0.5,
          barThickness: 6,
          maxBarThickness: 8,
          minBarLength: 2,
          data: [10, 20, 30, 40, 50, 60, 70],
        },
      ],
    };

    const options = {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    };
    return (
      <Fragment>
        <div>
          <div
            className="card py-5 px-3"
            style={{
              border: "1px solid white",
              borderRadius: "15px",
              marginBottom: "10%",
              backgroundColor: "#36096d",
              backgroundImage:
                "linear-gradient(to top right, #36096d 0%, #37d5d6 74%)",
              color: "white",
            }}
            onClick={this.handleCreateBudgetModal}
          >
            <h6 className="text-center">Set up Monthly Budget</h6>
          </div>
          <div>
            <CreateBudgetModal
              handleOpenCloseBudgetModal={this.handleCreateBudgetModal}
              isCreateBudgetModalOpen={this.state.isCreateBudgetModalOpen}
            />
          </div>
          <div>
            <h4 className="mb-3">Monthly Overview</h4>
          </div>
          <div className="row">
            <div className="col-12">
              {
                monthlyOverview && (
                  <div className="card p-3">
                  <div className="d-flex flex-row justify-content-around">
                    <div className="flex-column">
                      <div className="font-weight-bold">Income</div>
                      <div>{monthlyOverview.totalMonthlyIncome}</div>
                    </div>
                    <div className="flex-column">
                      <div className="font-weight-bold">Expense</div>
                      <div>{monthlyOverview.totalMonthlyExpense}</div>
                    </div>
                  </div>
                  <div className="dropdown-divider mx-3"></div>
                  <div className="d-flex flex-row justify-content-around">
                    <div className="flex-column">
                      <div className="font-weight-bold">I&E</div>
                    </div>
                    <div className="flex-column">
                      <div className={`${totalMonthlyIncome > totalMonthlyExpense ? "text-success" : "text-danger"} font-weight-bold`}>
                        {totalMonthlyIncome > totalMonthlyExpense ? `+${netIE}` : `-${netIE}`}
                      </div>
                    </div>
                  </div>
                </div>
                )
              }
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}



export default MonthlyOverview;
