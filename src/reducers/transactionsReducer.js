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
      console.log("updated moneyTransactionList: ", state.moneyTransactionList);
      return {
        ...state,
        moneyTransactionList: state.moneyTransactionList,
      };

    case "GET_MONTHLY_OVERVIEW":
      return{
        ...state,
        monthlyOverview: action.payload
      }  
    default:
      return state;
  }
}
