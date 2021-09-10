export default function bankAccountsReducer(
  state = {
    bankAccountsList: [],
  },
  action
) {
  switch (action.type) {
    case "GET_BANK_ACCOUNTS_LIST":
      return {
        ...state,
        bankAccountsList: action.payload,
      };

    case "UPDATE_BANK_ACCOUNTS_LIST":
      state.bankAccountsList.push(action.payload);
      return {
        ...state,
        bankAccountsList: state.bankAccountsList,
      };
    default:
      return state;
  }
}
