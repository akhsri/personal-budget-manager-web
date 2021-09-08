import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import { Fade, Modal } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import * as BankAccountActions from "../actions/bankAccounts";
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

const AccountsList = (props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [bankName, setBankName] = useState("");
  const [starterAmount, setStarterAmount] = useState("");

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { addBankAccount } = props;

  return (
    <div>
      <h6>ACCOUNTS</h6>
      <div>
        <ul>
          <li className="my-3">
            <span>Citi Bank Int. Ltd</span>
          </li>
          <li className="my-3">
            <span>HSBC Ltd.</span>
          </li>
          <li className="my-3">
            <span>Standard Chartered</span>
          </li>

          <Button
            variant="contained"
            color="primary"
            startIcon={<AddIcon />}
            onClick={handleOpen}
          >
            Add
          </Button>
        </ul>
        <Modal
          open={open}
          onClose={handleClose}
          className={classes.modal}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          <form
            onSubmit={(event) => {
              event.preventDefault();
              console.log("event in account list: ", event);
              const bankAccountDetails = {
                accountName: bankName,
                starterAmount: parseInt(starterAmount),
              };
              addBankAccount(bankAccountDetails, handleClose);
            }}
          >
            <Fade in={open}>
              <div className={classes.paper}>
                <h5>Add Bank Account</h5>
                <div className="mb-3">
                  <TextField
                    label="Bank Name"
                    variant="outlined"
                    value={bankName}
                    onChange={(event) => setBankName(event.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <TextField
                    label="Starter Amount"
                    variant="outlined"
                    value={starterAmount}
                    onChange={(event) => setStarterAmount(event.target.value)}
                  />
                </div>
                <div>
                  <Button
                    variant="contained"
                    color="primary"
                    startIcon={<AddIcon />}
                    onClick={handleOpen}
                    type="submit"
                  >
                    Add
                  </Button>
                </div>
              </div>
            </Fade>
          </form>
        </Modal>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addBankAccount: (bankAccountDetails, handleClose) => {
      dispatch(
        BankAccountActions.createBankAccount(bankAccountDetails, handleClose)
      );
    },
  };
};

export default connect(null, mapDispatchToProps)(AccountsList);
