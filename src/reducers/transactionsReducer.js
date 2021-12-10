export default function bankAccountsReducer(
  state = {
    moneyTransactionList: [],
  },
  action
) {
  switch (action.type) {
    case "GET_MONEY_TRANSACTION_LIST":
      console.log("getMoneyTransactions")
      return {
        ...state,
        moneyTransactionList: action.payload,
      };

    case "UPDATE_MONEY_TRANSACTION_LIST":
      state.moneyTransactionList.push(action.payload);
      console.log("state.moneyTransactionList: ", state.moneyTransactionList);
      return {
        ...state,
        moneyTransactionList: state.moneyTransactionList,
      };
    default:
      return state;
  }
}
