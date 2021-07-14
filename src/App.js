import { AccountsList } from "./parts/CategoriesList";
import { CategoriesList } from "./parts/AccountsList";
import Transactions from "./components/Transactions";
import ExpenseByCategory from "./components/ExpenseByCategory";
import { Fragment } from "react";
import SideNav from "./components/SideNav";

function App() {
  return (
    <Fragment>
      <SideNav />
    </Fragment>
  );
}

export default App;
