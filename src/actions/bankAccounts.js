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

export function getBankAccountsList(bankAccountsList) {
  return {
    type: ACTION_TYPES.GET_BANK_ACCOUNTS_LIST,
    payload: bankAccountsList,
  };
}

export function updateBankAccountsList(bankAccount) {
  return {
    type: ACTION_TYPES.UPDATE_BANK_ACCOUNTS_LIST,
    payload: bankAccount,
  };
}

export function createBankAccount(data, handleClose) {
  const URL = API.BASE_PATH + API.CREATE_BANK_ACCOUNT;
  const token = localStorage.getItem("token");
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  return function (dispatch) {
    return axios.post(URL, data, config).then((response) => {
      if (response) {
        if (response.status === 201) {
          dispatch(updateBankAccountsList(response.data));
          handleClose();
        }
      }
    });
  };
}

export function getBankAccounts() {
  const URL = API.BASE_PATH + API.GET_BANK_ACCOUNTS;
  const token = localStorage.getItem("token");
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  return function (dispatch) {
    return axios
      .get(URL, config)
      .then((response) => {
        if (response.status === 200) {
          dispatch(getBankAccountsList(response.data));
        }
      })
      .catch((error) => {
        if (error) {
          console.error("error res getBankAcc: ", error);
        }
      });
  };
}
