import axios from "axios";
import { ACTION_TYPES, API } from "../utils/consts";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function addMoneyTransaction(data) {
  return {
    type: ACTION_TYPES.ADD_MONEY_TRANSACTION,
    payload: data,
  };
}

export function getMoneyTransactionList(moneyTransactionList) {
  return {
    type: ACTION_TYPES.GET_MONEY_TRANSACTION_LIST,
    payload: moneyTransactionList,
  };
}

export function updateMoneyTransactionList(moneyTransaction) {
  return {
    type: ACTION_TYPES.UPDATE_MONEY_TRANSACTION_LIST,
    payload: moneyTransaction,
  };
}

export function createMoneyTransaction(
  data,
  handleCreateMoneyTransactionModel
) {
  const URL = API.BASE_PATH + API.CREATE_MONEY_TRANSACTION;
  const token = localStorage.getItem("token");
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  return function (dispatch) {
    return axios.post(URL, data, config).then((response) => {
      if (response) {
        console.log("response: ", response);
        if (response.status === 201) {
          const {
            handleClose,
            setPayeeName,
            setPayerName,
            setTransactionAmount,
            setCategoryId,
          } = handleCreateMoneyTransactionModel;
          dispatch(updateMoneyTransactionList(response.data));
          handleClose();
          setPayeeName("");
          setPayerName("");
          setTransactionAmount("");
          setCategoryId("");
        }
      }
    });
  };
}

export function getMoneyTransactions() {
  console.log("getMoneyTransactions called")
  const URL = API.BASE_PATH + API.GET_MONEY_TRANSACTION_LIST;
  const token = localStorage.getItem("token");
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  return function (dispatch) {
    return axios
      .get(URL, config)
      .then((response) => {
        console.log("response before if")
        if (response.status === 200) {
          console.log("response transactions: ", response)
          dispatch(getMoneyTransactionList(response.data));
        }
      })
      .catch((error) => {
        if (error) {
          console.error("error res getMoneyTransaction: ", error);
        }
      });
  };
}
