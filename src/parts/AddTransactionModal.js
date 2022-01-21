import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Modal from "@mui/material/Modal";
import DatePicker from "./DatePicker";
import moment from "moment";

import * as BudgetsAction from "../actions/budgets";
import * as TransactionsAction from "../actions/transactionsAction";

import { connect } from "react-redux";
import { Fragment } from "react";

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

const AddTransactionModal = (props) => {
  const {
    handleClickOpen,
    handleClose,
    open,
    categoriesList,
    addMoneyTransaction,
  } = props;
  const [transactionType, setTransactionType] = useState("");
  const [payerName, setPayerName] = useState("");
  const [payeeName, setPayeeName] = useState("");
  const [transactionAmount, setTransactionAmount] = useState("");
  const [transactionDate, setTransactionDate] = useState(new Date());
  const [categoryId, setCategoryId] = useState("");


  const transactionFormData = {
    moneyTransactionType: transactionType,
    [transactionType == "EXPENSE" ? "payee" : "payer"]:
      transactionType == "EXPENSE" ? payeeName : payerName,
    categoryId: categoryId,
    occuredAt: moment(transactionDate).toISOString(),
    amount: parseInt(transactionAmount),
  };

  const handleCreateMoneyTransactionModel = {
    handleClose,
    setPayeeName,
    setPayerName,
    setTransactionAmount,
    setCategoryId,
  };


  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <form
          onSubmit={(event) => {
            event.preventDefault();
            addMoneyTransaction(
              transactionFormData,
              handleCreateMoneyTransactionModel
            );
          }}
        >
          <Box sx={style} noValidate autoComplete="off">
            <div>
              <div>
                <RadioGroup
                  row
                  aria-label="position"
                  name="position"
                  defaultValue="Income"
                >
                  <FormControlLabel
                    value="INCOME"
                    control={<Radio />}
                    label="Income"
                    labelPlacement="end"
                    onChange={(event) => setTransactionType(event.target.value)}
                  />
                  <FormControlLabel
                    value="EXPENSE"
                    control={<Radio />}
                    label="Expense"
                    labelPlacement="end"
                    onChange={(event) => setTransactionType(event.target.value)}
                  />
                </RadioGroup>
              </div>
              {transactionType && (
                <Fragment>
                  <div>
                    <TextField
                      required
                      label={
                        transactionType === "EXPENSE"
                          ? "Payee Name"
                          : "Payer Name"
                      }
                      helperText={`Enter ${
                        transactionType === "EXPENSE"
                          ? "Payee Name"
                          : "Payer Name"
                      }`}
                      style={textFieldStyle}
                      onChange={(event) => {
                        transactionType === "EXPENSE"
                          ? setPayeeName(event.target.value)
                          : setPayerName(event.target.value);
                      }}
                    />
                    <TextField
                      required
                      label="Transaction Amount"
                      helperText="Enter transaction amount"
                      type="number"
                      style={textFieldStyle}
                      onChange={(event) =>
                        setTransactionAmount(event.target.value)
                      }
                    />
                  </div>
                  <div
                    style={{
                      maxWidth: "100%",
                      display: "flex",
                    }}
                  >
                    <TextField
                      required
                      select
                      label="Select Category"
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

                    <div style={{ maxWidth: "48%" }}>
                      <DatePicker setDate={setTransactionDate} />
                    </div>
                  </div>
                  <div>
                    <Button variant="contained" type="submit">
                      Add Transaction
                    </Button>
                  </div>
                </Fragment>
              )}
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
    addMoneyTransaction: (
      transactionFormData,
      handleCreateMoneyTransactionModel
    ) =>
      dispatch(
        TransactionsAction.createMoneyTransaction(
          transactionFormData,
          handleCreateMoneyTransactionModel
        )
      ),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTransactionModal);
