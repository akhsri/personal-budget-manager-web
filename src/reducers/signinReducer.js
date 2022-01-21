export default function signinReducer(
  state = {
    isAuthUser: !!localStorage.getItem("token"),
    user: localStorage.getItem("token") || {},
    isLoading: false,
    error: null,
  },
  action
) {
  switch (action.type) {
    case "UPDATE_AUTH_STATUS":
      localStorage.setItem("token", action.payload);
      const history = action.history;
      return {
        ...state,
        isAuthUser: true,
        token: action.payload,
      };

    default:
      return state;
  }
}
