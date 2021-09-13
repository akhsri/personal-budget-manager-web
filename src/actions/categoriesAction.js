import axios from "axios";
import { ACTION_TYPES, API } from "../utils/consts";

export function addCategory(data) {
  return {
    type: ACTION_TYPES.ADD_CATEGORY,
    payload: data,
  };
}

export function getCategoriesList(categoriesList) {
  return {
    type: ACTION_TYPES.GET_CATEGORIES_LIST,
    payload: categoriesList,
  };
}

export function updateCategoriesList(category) {
  return {
    type: ACTION_TYPES.UPDATE_CATEGORIES_LIST,
    payload: category,
  };
}

export function createCategory(categoryDetails, handleClose) {
  console.log("categoryDetails: ", categoryDetails);
  const URL = API.BASE_PATH + API.CREATE_CATEGORY;
  const token = localStorage.getItem("token");
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  return function (dispatch) {
    return axios.post(URL, categoryDetails, config).then((response) => {
      if (response) {
        if (response.status === 201) {
          dispatch(updateCategoriesList(response.data));
          handleClose();
        }
      }
    });
  };
}
