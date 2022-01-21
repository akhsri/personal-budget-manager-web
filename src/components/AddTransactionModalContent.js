import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import TextField from "@material-ui/core/TextField";

import DatePicker from "../parts/DatePicker";

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "#3F51B5",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#3F51B5",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#3F51B5",
      },
      "&:hover fieldset": {
        borderColor: "#3F51B5",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#3F51B5",
      },
    },
  },
})(TextField);

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

const AddTransactionModalContent = (props) => {
  const { activeStep } = props;
  const classes = useStyles();
  const [selectedValue, setSelectedValue] = React.useState("Groceries");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  return (
    <div>
      {activeStep == 0 && (
        <div>
          <h6>What kind of transaction it is?</h6>
          <div className="row">
            <div className="col-6">
              <div className="card">
                <span class="material-icons">skip_previous</span>
                <div className="card-body">
                  <h6 className="card-title">Income</h6>
                </div>
              </div>
            </div>
            <div className="col-6">
              <span className="card">
                <span class="material-icons">skip_next</span>
                <div className="card-body">
                  <h6 className="card-title">Expense</h6>
                </div>
              </span>
            </div>
          </div>
        </div>
      )}
      {activeStep == 1 && (
        <form className={classes.root} noValidate>
          <CssTextField
            className={classes.margin}
            label="Payee Name"
            variant="outlined"
            id="custom-css-outlined-input"
          />
        </form>
      )}
      {activeStep == 2 && (
        <div>
          <h5>Choose category</h5>
          <div className="row">
            {[
              "Groceries",
              "Utilities",
              "Household",
              "Food & Beverage",
              "Automobile",
            ].map((category) => {
              return (
                <div className="col-sm-6 my-2">
                  <div className="card rounded">
                    <div className="card-body">
                      <Radio
                        checked={selectedValue === category}
                        onChange={handleChange}
                        value={category}
                        name="radio-button-demo"
                        inputProps={{ "aria-label": "A" }}
                      />
                      <h6 className="card-title">{category}</h6>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {activeStep == 3 && (
        <form className={classes.root} noValidate>
          <CssTextField
            className={classes.margin}
            label="Amount"
            variant="outlined"
            id="custom-css-outlined-input"
          />
        </form>
      )}

      {activeStep == 4 && (
        <div>
          <h5>Select Date</h5>
          <DatePicker />
        </div>
      )}
    </div>
  );
};

export default AddTransactionModalContent;
