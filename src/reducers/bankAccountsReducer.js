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
    default:
      return state;
  }
}
