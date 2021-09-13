export default function bankAccountsReducer(
  state = {
    categoriesList: [],
  },
  action
) {
  switch (action.type) {
    case "GET_CATEGORIES_LIST":
      return {
        ...state,
        categoriesList: action.payload,
      };

    case "UPDATE_CATEGORIES_LIST":
      state.categoriesList.push(action.payload);
      return {
        ...state,
        categoriesList: state.categoriesList,
      };
    default:
      return state;
  }
}
