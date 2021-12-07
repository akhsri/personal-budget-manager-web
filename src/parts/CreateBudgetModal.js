import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import DatePicker from "./DatePicker";
import moment from "moment";
import * as BudgetsAction from "../actions/budgets";

import { connect } from "react-redux";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const textFieldStyle = {
  width: "48%",
  margin: "0 2% 2% 0",
};

const CreateBudgetModal = (props) => {
  const [categoryId, setCategoryId] = useState("");
  const [budgetName, setBudgetName] = useState("");
  const [budgetAmount, setBudgetAmount] = useState("");
  const [budgetDate, setBudgetDate] = useState(new Date());

  const {
    isCreateBudgetModalOpen,
    handleOpenCloseBudgetModal,
    categoriesList,
    addBudget,
  } = props;

  const budgetData = {
    budgetName: budgetName,
    budgetAmount: parseInt(budgetAmount),
    month: moment(budgetDate).format("MMMM"),
    year: parseInt(moment(budgetDate).format("YYYY")),
    categoryId: categoryId,
  };

  const handleCreateBudgetModal = {
    setBudgetAmount,
    setBudgetDate,
    setBudgetName,
    setCategoryId,
    handleOpenCloseBudgetModal,
  };
  console.log("categoriesList: ", categoriesList);
  console.log("isCreateBudgetModalOpen: ", isCreateBudgetModalOpen);
  console.log("Budget date: ", budgetDate);
  return (
    <div>
      <Modal
        open={isCreateBudgetModalOpen}
        onClose={handleOpenCloseBudgetModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <form
          onSubmit={(event) => {
            event.preventDefault();
            console.log("budgetData: ", budgetData);
            console.log("year: ", moment(budgetDate).format("YYYY"));
            addBudget(budgetData, handleCreateBudgetModal);
          }}
        >
          <Box sx={style} noValidate autoComplete="off">
            <div>
              <h5>Create Monthly Budget</h5>
            </div>
            <div>
              <TextField
                required
                id="outlined-required"
                label="Budget Name"
                helperText="Enter budget name"
                value={budgetName}
                onChange={(event) => setBudgetName(event.target.value)}
                style={textFieldStyle}
              />
              <TextField
                required
                label="Budget Amount"
                helperText="Enter budget amount"
                type="number"
                value={budgetAmount}
                onChange={(event) => setBudgetAmount(event.target.value)}
                style={textFieldStyle}
              />
            </div>
            <div>
              <TextField
                required
                select
                label="Select Budget Category"
                value={categoryId}
                onChange={(event) => {
                  setCategoryId(event.target.value);
                }}
                style={textFieldStyle}
              >
                {categoriesList.map((category) => (
                  <MenuItem key={category.id} value={category.id}>
                    {category.categoryName}
                  </MenuItem>
                ))}
              </TextField>
              <DatePicker
                datePickerType="YearMonthPicker"
                setDate={setBudgetDate}
              />
            </div>
            <div>
              <Button variant="contained" type="submit">
                Create Budget
              </Button>
            </div>
          </Box>
        </form>
      </Modal>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    categoriesList: state.categories.categoriesList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addBudget: (budgetData, handleCreateBudgetModal) =>
      dispatch(BudgetsAction.createBudget(budgetData, handleCreateBudgetModal)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateBudgetModal);
