export default function budgetReducer(
  state = {
    budgetList: [],
  },
  action
) {
  switch (action.type) {
    case "GET_BUDGET_LIST":
      return {
        ...state,
        budgetList: action.payload,
      };

    case "UPDATE_BUDGET_LIST":
      state.budgetList.push(action.payload);
      return {
        ...state,
        budgetList: state.budgetList,
      };
    default:
      return state;
  }
}
