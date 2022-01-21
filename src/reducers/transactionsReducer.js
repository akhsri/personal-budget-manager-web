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
      return {
        ...state,
        moneyTransactionList: [...state.moneyTransactionList, action.payload],
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
