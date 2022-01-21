import axios from "axios";
import { ACTION_TYPES, API } from "../utils/consts";

export function updateAuthStatus(token, history) {
  return {
    type: ACTION_TYPES.UPDATE_AUTH_STATUS,
    payload: token,
    history: history,
  };
}

export function authApiError(errorData) {
  return {
    type: ACTION_TYPES.AUTH_API_ERROR,
    payload: errorData,
  };
}

export const signin = (data, history) => {
  const URL = API.BASE_PATH + API.USER_SIGNIN;
  return function (dispatch) {
    return axios
      .post(URL, data)
      .then((response) => {
        if (response) {
          if (response.status === 201) {
            dispatch(updateAuthStatus(response.data.accessToken, history));
          }
        }
      })
      .catch((error) => {
        if (error.response) {
          dispatch(authApiError(error.response.data));
        }
      });
  };
};
