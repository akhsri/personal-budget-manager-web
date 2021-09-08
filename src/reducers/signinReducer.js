export default function signinReducer(
  state = {
    isAuthUser: !!localStorage.getItem("token"),
    user: localStorage.getItem("token") || {},
    isLoading: false,
    error: null,
  },
  action
) {
  console.log("SIGNIN REDUCER CALLED");
  switch (action.type) {
    case "UPDATE_AUTH_STATUS":
      console.log("inside reducer");
      localStorage.setItem("token", action.payload);
      const history = action.history;
      console.log("action: ", action);
      console.log("history in reducer: ", history);
      history.push("/app");
      return {
        ...state,
        isAuthUser: true,
        token: action.payload,
      };

    default:
      return state;
  }
}
