import React, { Component } from "react";
import { Doughnut } from "react-chartjs-2";
class ExpenseByCategory extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const data = {
      labels: ["Income", "Expense"],
      datasets: [
        {
          label: "My First Dataset",
          data: [80, 20],
          backgroundColor: ["orange", "lightorange"],
          hoverOffset: 1,
        },
      ],
    };
    const options = {
      legend: {
        display: false,
      },
    };
    return (
      <div>
        <h5 className="my-3">Expenses By Category</h5>
        <div className="card mb-3">
          <div className="d-flex flex-row py-3">
            <span
              style={{
                maxHeight: "50px",
                maxWidth: "100px",
              }}
            >
              <Doughnut data={data} options={options} />
            </span>
            <span className="">
              <p className="mb-1">Food & Beverage</p>
              <h6>$120.43</h6>
            </span>
            <span className="pl-5">
              <p>18%</p>
            </span>
          </div>
        </div>
        <div className="card mb-3">
          <div className="d-flex flex-row py-3">
            <span
              style={{
                maxHeight: "50px",
                maxWidth: "100px",
              }}
            >
              <Doughnut data={data} options={options} />
            </span>
            <span className="">
              <p className="mb-1">Food & Beverage</p>
              <h6>$120.43</h6>
            </span>
            <span className="pl-5">
              <p>18%</p>
            </span>
          </div>
        </div>
        <div className="card mb-3">
          <div className="d-flex flex-row py-3">
            <span
              style={{
                maxHeight: "50px",
                maxWidth: "100px",
              }}
            >
              <Doughnut data={data} options={options} />
            </span>
            <span className="">
              <p className="mb-1">Food & Beverage</p>
              <h6>$120.43</h6>
            </span>
            <span className="pl-5">
              <p>18%</p>
            </span>
          </div>
        </div>
      </div>
    );
  }
}
export default ExpenseByCategory;
