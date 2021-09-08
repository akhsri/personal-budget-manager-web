import axios from "axios";
import { ACTION_TYPES, API } from "../utils/consts";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function addBankAccount(data) {
  return {
    type: ACTION_TYPES.ADD_BANK_ACCOUNT,
    payload: data,
  };
}

export function createBankAccount(data, handleClose) {
  console.log("createBankAccount called");
  const URL = API.BASE_PATH + API.CREATE_BANK_ACCOUNT;
  const token = localStorage.getItem("token");
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  return function (dispatch) {
    return axios.post(URL, data, config).then((response) => {
      if (response) {
        if (response.status === 201) {
          dispatch(addBankAccount());
          handleClose();
        }
      }
    });
  };
}
