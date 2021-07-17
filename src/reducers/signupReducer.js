export default function signupReducer(state = {}, action) {
  switch (action.type) {
    case "UPDATE_SIGNUP_STATUS":
      return {
        ...state,
        signupStatus: action.payload,
      };

    default:
      return state;
  }
}
