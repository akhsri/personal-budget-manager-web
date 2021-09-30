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
  const { datePickerType, setDate } = props;
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
        inputVariant="outlined"
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
          setDate(date);
        }}
        KeyboardButtonProps={{
          "aria-label": "change date",
        }}
        style={{ margin: "0px", maxWidth: "100%" }}
      />
    </MuiPickersUtilsProvider>
  );
}
