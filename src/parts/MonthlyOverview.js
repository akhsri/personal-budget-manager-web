import React, { Component, Fragment } from "react";
import { Bar } from "react-chartjs-2";

import CreateBudgetModal from "./CreateBudgetModal";

class MonthlyOverview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCreateBudgetModalOpen: false,
    };
  }

  handleCreateBudgetModal = () => {
    console.log("handleCreateBudgetModal called");
    this.setState({
      isCreateBudgetModalOpen: !this.state.isCreateBudgetModalOpen,
    });
  };

  render() {
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
              backgroundImage: "linear-gradient(to top right, #36096d 0%, #37d5d6 74%)",
              color: "white"
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
              <div className="card p-3">
                <div className="d-flex flex-row justify-content-around">
                  <div className="flex-column">
                    <div>Income</div>
                    <div>23224</div>
                  </div>
                  <div className="flex-column">
                    <div>Expense</div>
                    <div>9329</div>
                  </div>
                </div>
                <div className="dropdown-divider mx-3"></div>
                <div className="d-flex flex-row justify-content-around">
                  <div className="flex-column">
                    <div>I&E</div>
                  </div>
                  <div className="flex-column">
                    <div>+2121</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default MonthlyOverview;
