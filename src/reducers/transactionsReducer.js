export default function bankAccountsReducer(
  state = {
    moneyTransactionList: [],
  },
  action
) {
  switch (action.type) {
    case "GET_MONEY_TRANSACTION_LIST":
      return {
        ...state,
        moneyTransactionList: action.payload,
      };

    case "UPDATE_MONEY_TRANSACTION_LIST":
      state.moneyTransactionList.push(action.payload);
      return {
        ...state,
        moneyTransactionList: state.bankAccountsList,
      };
    default:
      return state;
  }
}
