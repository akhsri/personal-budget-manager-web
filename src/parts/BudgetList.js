import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import * as BudgetsActions from "../actions/budgets";
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const BudgetsList = (props) => {
  const { budgetsList, getBudgets } = props;

  useEffect(() => {
    getBudgets();
  }, []);

  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [budgetName, setCategoryName] = useState("");

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <h6>Budgets</h6>
      <div>
        <ul>
          {budgetsList ? (
            budgetsList.map((budget) => {
              return (
                <li key={budget.id} className="my-3">
                  <span>{budget.budgetName}</span>
                </li>
              );
            })
          ) : (
            <h6>You haven't added any budget!</h6>
          )}
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    budgetsList: state.budgets.budgetList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getBudgets: () => {
      dispatch(BudgetsActions.getBudgets());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BudgetsList);
