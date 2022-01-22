import React, { Component } from "react";
import DatePicker from "../parts/DatePicker";
import TransactionsList from "../parts/TransactionsList";
import AddTransaction from "./AddTransaction";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";

class Transactions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
    };
  }

  handleDate = (date) => {
    this.setState({ startDate: date });
  };
  render() {
    return (
      <div>
        <div className="row">
          <span className="col-10">
            <h3>Daily Transactions</h3>
          </span>
          <span className="col-2">
            <AddTransaction />
          </span>
        </div>
        {/* <div>
          <Autocomplete
            freeSolo
            id="free-solo-2-demo"
            disableClearable
            options={[].map((option) => option.title)}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Search transactions"
                InputProps={{
                  ...params.InputProps,
                  type: "search",
                  endAdornment: (
                    <InputAdornment>
                      <IconButton>
                        <SearchIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            )}
          />
        </div> */}
        <div>
          <TransactionsList />
        </div>
      </div>
    );
  }
}
export default Transactions;
