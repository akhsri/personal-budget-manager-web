import axios from "axios";
import { ACTION_TYPES, API } from "../utils/consts";

export function updateAuthStatus(token, history) {
  console.log("history: ", history);
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
  console.log("history: ", history);
  console.log("signin called");
  const URL = API.BASE_PATH + API.USER_SIGNIN;
  console.log("URL: ", URL);
  return function (dispatch) {
    return axios
      .post(URL, data)
      .then((response) => {
        if (response) {
          console.log("response: ", response);
          if (response.status === 201) {
            dispatch(updateAuthStatus(response.data.accessToken, history));
          }
        }
      })
      .catch((error) => {
        console.log("err: ", error.response);
        if (error.response) {
          dispatch(authApiError(error.response.data));
        }
      });
  };
};
