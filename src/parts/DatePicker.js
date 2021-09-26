import "date-fns";
import React from "react";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";

export default function MaterialUIPickers(props) {
  const { datePickerType, setBudgetDate } = props;
  // The first commit of Material-UI
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        disableToolbar
        views={
          datePickerType == "YearMonthPicker"
            ? ["year", "month"]
            : ["year", "month", "date"]
        }
        variant="inline"
        format="MM/dd/yyyy"
        margin="normal"
        id="date-picker-inline"
        label={
          datePickerType == "YearMonthPicker"
            ? "Select Budget Month"
            : "Select Transaction Date"
        }
        value={selectedDate}
        onChange={(date) => {
          setBudgetDate(date);
        }}
        KeyboardButtonProps={{
          "aria-label": "change date",
        }}
        style={{ marginRight: "0px" }}
      />
    </MuiPickersUtilsProvider>
  );
}
