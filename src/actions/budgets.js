import axios from "axios";
import { ACTION_TYPES, API } from "../utils/consts";

export function getBudgetList(bankAccountsList) {
  return {
    type: ACTION_TYPES.GET_BUDGET_LIST,
    payload: bankAccountsList,
  };
}

export function updateBudgetList(budgetList) {
  return {
    type: ACTION_TYPES.UPDATE_BUDGET_LIST,
    payload: budgetList,
  };
}

export function createBudget(data, handleCreateBudgetModal) {
  const URL = API.BASE_PATH + API.CREATE_BUDGET;
  const token = localStorage.getItem("token");
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  return function (dispatch) {
    return axios.post(URL, data, config).then((response) => {
      if (response) {
        if (response.status === 201) {
          dispatch(updateBudgetList(response.data));
          const {
            setCategoryId,
            setBudgetDate,
            setBudgetName,
            setBudgetAmount,
            handleOpenCloseBudgetModal,
          } = handleCreateBudgetModal;
          setCategoryId("");
          setBudgetAmount("");
          setBudgetDate(new Date());
          setBudgetName("");
          handleOpenCloseBudgetModal();
        }
      }
    });
  };
}
