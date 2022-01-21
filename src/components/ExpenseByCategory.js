import React, { Component } from "react";
import { Doughnut } from "react-chartjs-2";
import * as TransactionActions from "../actions/transactionsAction";
import { connect } from "react-redux";
class ExpenseByCategory extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { monthlyOverview } = this.props;

    const options = {
      legend: {
        display: false,
      },
    };
    return (
      <div>
        <h5 className="my-3">Expenses By Category</h5>

        <div>
          {monthlyOverview &&
            monthlyOverview.expensesByCategory.map((expense) => {
              const {
                budgetPercentageLeft,
                budgetPercentageUsed,
                categoryBudgetAmountforCurrentMonth,
                categoryId,
                categoryName,
                totalExpense,
                totalIncome,
              } = expense;
              return(
                <div
          className="card mb-3"
          style={{
            backgroundColor: "#f2f4ff",
            opacity: "1",
            borderColor: "white",
          }}
        >
          <div className="d-flex flex-row py-3">
            <span
              style={{
                maxHeight: "50px",
                maxWidth: "100px",
              }}
            >
              <Doughnut data={
                {
                  labels: ["Used", "Left"],
                  datasets: [
                    {
                      label: "My First Dataset",
                      data: [`${budgetPercentageUsed}`, `${budgetPercentageLeft}`],
                      backgroundColor: ["#0000FF", "#FF5733"],
                      hoverOffset: 1,
                    },
                  ]
                }
              } options={options} />
            </span>
            <span className="">
              <p className="mb-1">{categoryName}</p>
              <h6>${totalExpense}</h6>
            </span>
            <span className="pl-5">
              <p>{budgetPercentageUsed}%</p>
            </span>
          </div>
        </div>
              );
            })}
        </div>
        
        
      </div>
    );
  }
}

export default ExpenseByCategory;
