import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import DatePicker from "./DatePicker";

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

const currencies = [
  {
    value: "USD",
    label: "$",
  },
  {
    value: "EUR",
    label: "€",
  },
  {
    value: "BTC",
    label: "฿",
  },
  {
    value: "JPY",
    label: "¥",
  },
];

const CreateBudgetModal = (props) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [currency, setCurrency] = React.useState("EUR");

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  const { isCreateBudgetModalOpen, handleCreateBudgetModal, categoriesList } =
    props;
  console.log("categoriesList: ", categoriesList);
  console.log("isCreateBudgetModalOpen: ", isCreateBudgetModalOpen);
  return (
    <div>
      <Modal
        open={isCreateBudgetModalOpen}
        onClose={handleCreateBudgetModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box component="form" sx={style} noValidate autoComplete="off">
          <div>
            <h5>Create Monthly Budget</h5>
          </div>
          <div>
            <TextField
              required
              id="outlined-required"
              label="Budget Name"
              helperText="Enter budget name"
              style={textFieldStyle}
            />
            <TextField
              required
              id="outlined-number"
              label="Budget Amount"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              style={textFieldStyle}
            />
          </div>
          <div>
            <TextField
              id="outlined-select-currency"
              select
              label="Select Budget Category"
              value={currency}
              onChange={handleChange}
              style={textFieldStyle}
            >
              {categoriesList.map((category) => (
                <MenuItem key={category.id} value={category.categoryName}>
                  {category.categoryName}
                </MenuItem>
              ))}
            </TextField>
            <DatePicker datePickerType="YearMonthPicker" />
          </div>
          <div>
            <Button variant="contained">Create Budget</Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    categoriesList: state.categories.categoriesList,
  };
};

export default connect(mapStateToProps, null)(CreateBudgetModal);
