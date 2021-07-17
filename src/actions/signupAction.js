import axios from "axios";
import { ACTION_TYPES, API } from "../utils/consts";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toastr } from "react-redux-toastr";
import { Snackbar } from "@material-ui/core";

export function updateSignupStatus(status) {
  return {
    type: ACTION_TYPES.UPDATE_SIGNUP_STATUS,
    payload: status,
  };
}

export function signup(data) {
  console.log("data: ", data);
  const URL = API.BASE_PATH + API.USER_SIGNUP;
  return function (dispatch) {
    return axios
      .post(URL, data)
      .then((response) => {
        if (response) {
          console.log("response: ", response);
          if (response.status === 201) {
            dispatch(updateSignupStatus(true));
          }
        }
      })
      .catch((error) => {
        console.log("err: ", error);
      });
  };
  console.log("URL: ", URL);
}
