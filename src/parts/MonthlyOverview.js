import React, { Component, Fragment } from "react";
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
    return (
      <Fragment>
        <div>
          <div
            className="card py-5 px-3"
            style={{
              border: "1px solid grey",
              borderRadius: "15px",
              marginBottom: "10%",
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
            <div className="col-6">
              <div className="card">
                <h6>Expense</h6>
              </div>
            </div>
            <div className="col-6">
              <div className="card">
                <h6>Income</h6>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default MonthlyOverview;
